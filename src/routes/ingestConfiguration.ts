import { Router } from 'express';
import prisma from '../lib/prisma';
import { standardizeFormatting } from './utilities';
import type { ConfigurationData } from '../types';
// import { getEmbedding } from '../openai';
// import { getEmbedding } from '../hugging-face/e5-base-v2';
// import { getEmbedding } from '../hugging-face/gte-small';
// import { getEmbedding } from '../hugging-face/bge-small-en-v1.5';
import { getEmbedding } from '../hugging-face/gte-large';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, description, attributes } = req.body as ConfigurationData;

    let newProductCount = 0;
    let newAttributeOptionCount = 0;

    let newProduct = await prisma.product.findUnique({
      where: { productName },
    });

    if (!newProduct) {
      newProductCount += 1;

      const embedding = await getEmbedding(standardizeFormatting(productName + description));
      newProduct = await prisma.product.create({
        data: {
          productName,
          description,
          embedding,
          metadata: { reminder: 'metadata' },
        },
      });

      console.log('Created new product:', newProduct.productName);
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
          newAttributeOptionCount += 1;

          const embedding = await getEmbedding(
            standardizeFormatting(
              `This product has customized ${attributeName} with the choice ${attributeOption}.`
            )
          );
          newAttributeOption = await prisma.attributeOption.create({
            data: {
              attribute: attributeName,
              attributeOption,
              embedding,
              metadata: { reminder: 'metadata' },
            },
          });

          console.log(
            'Created new attribute option:',
            newAttributeOption.attribute,
            newAttributeOption.attributeOption
          );

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
      newProductCount,
      newAttributeOptionCount,
    });
  } catch (err) {
    console.log(err);
    res.json({ error: 'Error ingesting configurtion data:', err });
  }
});

export default router;
