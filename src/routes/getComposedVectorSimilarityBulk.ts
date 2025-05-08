import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
  calcMeanOfArray,
  averageVector,
} from './utilities';

const router = Router();

// Compares all variants of a product by comparing their full configuration vectors
// to the averaged embeddings of their individual "attribute: option" components.

router.post('/', async (req, res) => {
  try {
    const { productName } = req.body;

    const variants = await prisma.variant.findMany({
      where: {
        productName,
      },
    });

    if (variants.length === 0) {
      throw new Error('No variants with this productName');
    }

    const collectedEuclideanDistances: number[] = [];
    const collectedEuclideanDistancesMetric: number[] = [];
    const collectedCosineSimilarity: number[] = [];

    console.log(`Calculating stats for product ${productName} across ${variants.length} variants.`);

    for (const variant of variants) {
      const parsedConfiguration = JSON.parse(variant.configuration) as Record<string, string>;
      const attributeOptionEmbeddings: number[][] = [];

      for (const [rawAttribute, rawAttributeOption] of Object.entries(parsedConfiguration)) {
        const attribute = rawAttribute.trim();
        const attributeOption = rawAttributeOption.trim();

        const attributeOptionEntry = await prisma.attributeOption.findUnique({
          where: {
            attribute_attributeOption: {
              attribute,
              attributeOption,
            },
          },
        });

        if (!attributeOptionEntry) {
          throw new Error(`Attribute Option not found for ${attribute}: ${attributeOption}`);
        }

        attributeOptionEmbeddings.push(attributeOptionEntry.embedding as number[]);
      }

      const attributeOptionSumVector = calcVectorSum(attributeOptionEmbeddings);
      // Averaging instead of summing the attribute–option embeddings brings composed vectors’
      // magnitude much closer to the full configuration vectors.
      const attributeOptionsAverageVector = averageVector(attributeOptionSumVector);

      const variantConfigurationVector = variant.embedding as number[];

      const euclideanDistance = calcEuclideanDistance(
        attributeOptionsAverageVector,
        variantConfigurationVector
      );

      const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);
      const attributeOptionsAverageVectorNorm = calcVectorNorm(attributeOptionsAverageVector);

      const euclideanDistanceMetric = euclideanDistance / variantConfigurationVectorNorm;

      const cosineSimilarity = calcCosineSimilarity(
        attributeOptionsAverageVector,
        variantConfigurationVector,
        attributeOptionsAverageVectorNorm,
        variantConfigurationVectorNorm
      );

      collectedEuclideanDistances.push(euclideanDistance);
      collectedEuclideanDistancesMetric.push(euclideanDistanceMetric);
      collectedCosineSimilarity.push(cosineSimilarity);
    }

    const meanEuclideanDistanceRatio = calcMeanOfArray(collectedEuclideanDistancesMetric);
    const meanCosineSimilarity = calcMeanOfArray(collectedCosineSimilarity);

    res.json({
      productName,
      meanEuclideanDistanceRatio,
      meanCosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
