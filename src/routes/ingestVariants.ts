import { Router } from 'express';
import prisma from '../lib/prisma';
import type { VariantData } from '../types';
import { getEmbedding } from '../openai';

const router = Router();

function canonicalize(obj: any): any {
  if (Array.isArray(obj)) return obj.map(canonicalize);
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, canonicalize(v)])
    );
  }
  return obj;
}

router.post('/', async (req, res) => {
  try {
    const variantData = req.body as VariantData;
    const productName = variantData.productName;
    const description = variantData.description;
    const embedString = productName + description;
    const embedding = await getEmbedding(embedString);

    const newProduct = await prisma.product.upsert({
      where: { productName },
      update: {},
      create: {
        productName: productName,
        description: description,
        embedding: embedding,
        metadata: { reminder: 'metadata' },
      },
    });

    for (const v of variantData.variants) {
      // Want to order the variant config so we vectorize consistently.
      let embedString = JSON.stringify(canonicalize(v));
      let embedding = await getEmbedding(embedString);

      const newVariant = await prisma.variant.upsert({
        where: {
          productId_configuration: {
            productId: newProduct.id,
            configuration: embedString,
          },
        },
        update: {},
        create: {
          productId: newProduct.id,
          configuration: embedString,
          embedding: embedding,
          metadata: { reminder: 'metadata' },
        },
      });
    }

    res.json({
      message: 'Successfully ingested variant data.',
    });
  } catch (err) {
    console.log(err);
    res.json({ error: 'Error ingesting variant data:', err });
  }
});

export default router;
