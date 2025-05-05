import { Router } from 'express';
import prisma from '../lib/prisma';
import type { VariantData } from '../types';

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
    const rawVariantsData = req.body as VariantData[];

    for (const v of rawVariantsData) {
      const newProduct = await prisma.product.upsert({
        where: { productName: v.productName },
        update: {},
        create: {
          productName: v.productName,
          description: v.description,
          metadata: { reminder: 'metadata' },
        },
      });

      // Want to order configurations for accurate dup detection
      const configuration = JSON.stringify(canonicalize(v.configuration));

      const newVariant = await prisma.variant.upsert({
        where: {
          productId_configuration: {
            productId: newProduct.id,
            configuration: configuration,
          },
        },
        update: {},
        create: {
          productId: newProduct.id,
          configuration: configuration,
          metadata: { reminder: 'metadata' },
        },
      });

      // create attributes/options
      for (let [attributeName, attributeOption] of Object.entries(v.configuration)) {
        const newAttribute = await prisma.attributeOption.upsert({
          where: {
            attribute_attributeOption: {
              attribute: attributeName,
              attributeOption: attributeOption,
            },
          },
          update: {},
          create: {
            attribute: attributeName,
            attributeOption: attributeOption,
            metadata: { reminder: 'metadata' },
          },
        });

        // link product and attribute option
        await prisma.productAttributeOption.upsert({
          where: {
            productId_attributeOptionId: {
              productId: newProduct.id,
              attributeOptionId: newAttribute.id,
            },
          },
          update: {},
          create: {
            productId: newProduct.id,
            attributeOptionId: newAttribute.id,
          },
        });
      }
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
