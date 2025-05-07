import { Router } from 'express';
import prisma from '../lib/prisma';
import {
  canonicalize,
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
  calcVectorNorm,
} from './utilities';

const router = Router();

// For testing a single variant configuration vector against the
// composition of the vectors for individual "attribute: attributeOptions" strings.

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

    res.json({
      euclideanDistance,
      normalizedDistance,
      cosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
