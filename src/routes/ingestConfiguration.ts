import { Router } from 'express';
import prisma from '../lib/prisma';
import type { ConfigurationData } from '../types';
import { getEmbedding } from '../openai';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, description, attributes } = req.body as ConfigurationData;

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

    for (const attribute of attributes) {
      const attributeName = attribute.attributeName;
      for (const attributeOption of attribute.options) {
        const embedString = `${attributeName}: ${attributeOption}`;
        let embedding = await getEmbedding(embedString);

        const newAttributeOption = await prisma.attributeOption.upsert({
          where: {
            attribute_attributeOption: {
              attribute: attributeName,
              attributeOption,
            },
          },
          update: {},
          create: {
            attribute: attributeName,
            attributeOption,
            embedding: embedding,
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

    res.json({
      message: 'Successfully ingested configuration data.',
    });
  } catch (err) {
    console.log(err);
    res.json({ error: 'Error ingesting configurtion data:', err });
  }
});

export default router;
