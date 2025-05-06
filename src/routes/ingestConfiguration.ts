import { Router } from 'express';
import prisma from '../lib/prisma';
import type { ConfigurationData } from '../types';
import { getEmbedding } from '../openai';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, description, attributes } = req.body as ConfigurationData;

    let newProduct = await prisma.product.findUnique({
      where: { productName },
    });

    if (!newProduct) {
      const embedding = await getEmbedding(productName + description);
      newProduct = await prisma.product.create({
        data: {
          productName,
          description,
          embedding,
          metadata: { reminder: 'metadata' },
        },
      });
    }

    for (const attribute of attributes) {
      const attributeName = attribute.attributeName;
      for (const attributeOption of attribute.options) {
        let newAttributeOption = await prisma.attributeOption.findUnique({
          where: {
            attribute_attributeOption: {
              attribute: attributeName,
              attributeOption,
            },
          },
        });

        if (!newAttributeOption) {
          const embedding = await getEmbedding(`${attributeName}: ${attributeOption}`);
          newAttributeOption = await prisma.attributeOption.create({
            data: {
              attribute: attributeName,
              attributeOption,
              embedding,
              metadata: { reminder: 'metadata' },
            },
          });

          await prisma.productAttributeOption.upsert({
            where: {
              productId_attributeOptionId: {
                productId: newProduct.id,
                attributeOptionId: newAttributeOption.id,
              },
            },
            update: {},
            create: {
              productId: newProduct.id,
              attributeOptionId: newAttributeOption.id,
            },
          });
        }
      }
    }

    res.json({
      message: 'Successfully ingested configuration data.',
    });
  } catch (err) {
    console.log(err);
    res.json({ error: 'Error ingesting configurtion data:', err });
  }
});

export default router;
