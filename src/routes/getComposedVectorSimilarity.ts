import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  canonicalize,
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
  normalizeVector,
} from './utilities';

const router = Router();

// Compares a variant's full configuration vector to the sum of individual "attribute: option" embeddings.

router.post('/', async (req, res) => {
  try {
    const { productName, configuration } = req.body;
    // Just in case the incoming configuration isn't sorted.
    const sortedConfiguration = JSON.stringify(canonicalize(configuration));

    const variant = await prisma.variant.findUnique({
      where: {
        productName_configuration: {
          productName,
          configuration: sortedConfiguration,
        },
      },
    });

    if (!variant) {
      throw new Error('Variant not found. Check configuration');
    }

    console.log(`Calculating stats for product ${productName} on variantId: ${variant.id}`);

    const attributeOptionEmbeddings: number[][] = [];
    for (const [rawAttribute, rawAttributeOption] of Object.entries(configuration)) {
      const attribute = rawAttribute.trim();
      const attributeOption = (rawAttributeOption as string).trim();
      const attributeOptionEntry = await prisma.attributeOption.findUnique({
        where: {
          attribute_attributeOption: {
            attribute: attribute,
            attributeOption: attributeOption,
          },
        },
      });

      if (!attributeOptionEntry) {
        throw new Error(`Attribute Option not found for ${attribute}: ${attributeOption}`);
      }

      attributeOptionEmbeddings.push(attributeOptionEntry.embedding as number[]);
    }

    const attributeOptionSumVector = calcVectorSum(attributeOptionEmbeddings);

    // openAI always normalizes vectors before returning. There's no way to turn this off =(.
    // If using openAI, or any other api that uses normalized vectors, the attributeOptionSumVector needs to be normalized to calculate euclidean distance.
    const attributeOptionsNormalized = normalizeVector(attributeOptionSumVector);

    const variantConfigurationVector = variant.embedding as number[];

    // Use this version for models that return full-length vectors.
    // const euclideanDistance = calcEuclideanDistance(
    //   attributeOptionSumVector,
    //   variantConfigurationVector
    // );

    // Use this version for models like OpenAI that return unit-normalized vectors.
    const euclideanDistance = calcEuclideanDistance(
      attributeOptionsNormalized,
      variantConfigurationVector
    );

    const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);
    const attributeOptionSumVectorNorm = calcVectorNorm(attributeOptionSumVector);

    const euclideanDistanceSimilarity = euclideanDistance / variantConfigurationVectorNorm;

    const cosineSimilarity = calcCosineSimilarity(
      attributeOptionSumVector, // Cosine similarity is scale-invariant, so we can use the raw sum or the normalized vector.
      variantConfigurationVector,
      attributeOptionSumVectorNorm,
      variantConfigurationVectorNorm
    );

    res.json({
      euclideanDistance,
      euclideanDistanceSimilarity,
      cosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
