import { Router } from 'express';
import prisma from '../lib/prisma';
import { getEmbedding } from '../openai';
import {
  canonicalize,
  calcEuclideanDistance,
  calcCosineSimilarity,
  calcVectorSum,
} from './utilities';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, configuration } = req.body;
    const parsedConfiguration = JSON.parse(configuration) as Record<string, string>;
    const sortedConfiguration = JSON.stringify(canonicalize(parsedConfiguration));

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

    const attributeOptionEmbeddings: number[][] = [];
    for (const [attribute, attributeOption] of Object.entries(parsedConfiguration)) {
      const entry = await prisma.attributeOption.findUnique({
        where: {
          attribute_attributeOption: {
            attribute: attribute.trim(),
            attributeOption: attributeOption.toString().trim(),
          },
        },
      });

      if (!entry) {
        throw new Error(`Attribute Option not found for ${attribute}: ${attributeOption}`);
      }

      attributeOptionEmbeddings.push(entry.embedding as number[]);
    }

    const attributeOptionSum = calcVectorSum(attributeOptionEmbeddings);

    const euclideanDistance = calcEuclideanDistance(
      attributeOptionSum,
      variant.embedding as number[]
    );

    const cosineSimilarity = calcCosineSimilarity(
      attributeOptionSum,
      variant.embedding as number[]
    );

    res.json({
      message: 'Successfully ingested variant data.',
      euclideanDistance,
      cosineSimilarity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error ingesting variant data.', detail: err });
  }
});

export default router;
