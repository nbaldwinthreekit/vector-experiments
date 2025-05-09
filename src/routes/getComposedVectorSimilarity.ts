import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  canonicalize,
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
  normalizeVector,
  calcAverageVector,
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
    const attributeOptionsAverageVector = calcAverageVector(attributeOptionSumVector);
    const attributeOptionsAverageVectorNorm = calcVectorNorm(attributeOptionsAverageVector);

    const variantConfigurationVector = variant.embedding as number[];
    const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);

    const euclideanDistance = calcEuclideanDistance(
      attributeOptionsAverageVector,
      variantConfigurationVector
    );

    const euclideanDistanceMetric = euclideanDistance / variantConfigurationVectorNorm;

    const cosineSimilarity = calcCosineSimilarity(
      attributeOptionsAverageVector,
      variantConfigurationVector,
      attributeOptionsAverageVectorNorm,
      variantConfigurationVectorNorm
    );

    res.json({
      euclideanDistance,
      euclideanDistanceMetric,
      cosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
