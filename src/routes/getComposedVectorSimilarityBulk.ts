import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
  calcMeanOfArray,
  normalizeVector,
} from './utilities';

const router = Router();

// Compares all variants of a product by comparing their full configuration vectors
// to the sum of individual "attribute: option" embeddings.

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

      const variantConfigurationVector = variant.embedding as number[];

      // Use this version for models that return full-length vectors.
      const euclideanDistance = calcEuclideanDistance(
        attributeOptionSumVector,
        variantConfigurationVector
      );

      // // Use this version for models like OpenAI that return unit-normalized vectors.
      // const euclideanDistance = calcEuclideanDistance(
      //   normalizeVector(attributeOptionSumVector),
      //   variantConfigurationVector
      // );

      const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);
      const attributeOptionSumVectorNorm = calcVectorNorm(attributeOptionSumVector);

      const euclideanDistanceMetric = euclideanDistance / variantConfigurationVectorNorm;

      const cosineSimilarity = calcCosineSimilarity(
        attributeOptionSumVector, // Cosine similarity is scale-invariant, so we can use the raw sum.
        variantConfigurationVector,
        attributeOptionSumVectorNorm,
        variantConfigurationVectorNorm
      );

      collectedEuclideanDistances.push(euclideanDistance);
      collectedEuclideanDistancesMetric.push(euclideanDistanceMetric);
      collectedCosineSimilarity.push(cosineSimilarity);
    }

    const meanEuclideanDistance = calcMeanOfArray(collectedEuclideanDistances);
    const meanEuclideanDistanceMetric = calcMeanOfArray(collectedEuclideanDistancesMetric);
    const meanCosineSimilarity = calcMeanOfArray(collectedCosineSimilarity);

    res.json({
      productName,
      variantCount: variants.length,
      meanEuclideanDistance,
      meanEuclideanDistanceMetric,
      meanCosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
