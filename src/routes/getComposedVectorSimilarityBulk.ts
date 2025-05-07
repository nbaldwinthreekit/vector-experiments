import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
  calcMeanOfArray,
} from './utilities';

const router = Router();

// For testing all variant configuration vectors for a product against the
// composition of the vectors for individual "attribute: attributeOptions" strings.

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

    const collectedEuclideanDistances = [];
    const collectedNormalizedDistances = [];
    const collectedCosineSimilarity = [];

    console.log(
      `Calculating stats for product ${productName} for all variants. Total variants ${variants.length}`
    );

    for (const variant of variants) {
      const parsedConfiguration = JSON.parse(variant.configuration) as Record<string, string>;
      const attributeOptionEmbeddings: number[][] = [];
      for (const [attribute, attributeOption] of Object.entries(parsedConfiguration)) {
        const attributeOptionEntry = await prisma.attributeOption.findUnique({
          where: {
            attribute_attributeOption: {
              attribute: attribute,
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
      const variantConfigurationVector = variant.embedding as number[];

      const euclideanDistance = calcEuclideanDistance(
        attributeOptionSumVector,
        variantConfigurationVector
      );

      const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);
      const attributeOptionSumVectorNorm = calcVectorNorm(attributeOptionSumVector);

      const normalizedDistance = euclideanDistance / variantConfigurationVectorNorm;

      const cosineSimilarity = calcCosineSimilarity(
        attributeOptionSumVector,
        variantConfigurationVector,
        attributeOptionSumVectorNorm,
        variantConfigurationVectorNorm
      );

      collectedEuclideanDistances.push(euclideanDistance);
      collectedNormalizedDistances.push(normalizedDistance);
      collectedCosineSimilarity.push(cosineSimilarity);
    }

    const meanEuclideanDistance = calcMeanOfArray(collectedEuclideanDistances);
    const meanNormalizedDistance = calcMeanOfArray(collectedNormalizedDistances);
    const meanCosineSimilarity = calcMeanOfArray(collectedCosineSimilarity);

    res.json({
      productName,
      variantCount: variants.length,
      meanEuclideanDistance,
      meanNormalizedDistance,
      meanCosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
