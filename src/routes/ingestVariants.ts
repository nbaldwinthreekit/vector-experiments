import { Router } from 'express';
import prisma from '../lib/prisma';
import type { VariantData } from '../types';
// import { getEmbedding } from '../openai';
import { getEmbedding } from '../hugging-face';
import { canonicalize } from './utilities';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { productName, description, variants } = req.body as VariantData;

    let newProductCount = 0;
    let newVariantCount = 0;
    let newAttributeOptionCount = 0;

    let newProduct = await prisma.product.findUnique({ where: { productName } });

    if (!newProduct) {
      newProductCount += 1;

      const productEmbedding = await getEmbedding(productName + description);
      newProduct = await prisma.product.create({
        data: {
          productName,
          description,
          embedding: productEmbedding,
          metadata: { reminder: 'metadata' },
        },
      });

      console.log('Created new product:', newProduct.productName);
    }

    for (const v of variants) {
      // Sorting the config object to ensure consistent vectorization.
      const configString = JSON.stringify(canonicalize(v));

      let newVariant = await prisma.variant.findUnique({
        where: {
          productName_configuration: {
            productName,
            configuration: configString,
          },
        },
      });

      if (!newVariant) {
        newVariantCount += 1;

        const variantEmbedding = await getEmbedding(configString);
        newVariant = await prisma.variant.create({
          data: {
            productId: newProduct.id,
            productName,
            configuration: configString,
            embedding: variantEmbedding,
            metadata: { reminder: 'metadata' },
          },
        });

        console.log('Created new variant:', newVariant.configuration);
      }

      const attributeOptions = configString.split(',');
      for (const pair of attributeOptions) {
        const [rawKey, rawValue] = pair.split(':');
        const attributeName = rawKey?.replace(/["{}]/g, '').trim();
        const attributeOption = rawValue?.replace(/["{}]/g, '').trim();

        if (!attributeName || !attributeOption) continue;

        let newAttributeOption = await prisma.attributeOption.findUnique({
          where: {
            attribute_attributeOption: {
              attribute: attributeName,
              attributeOption: attributeOption,
            },
          },
        });

        if (!newAttributeOption) {
          newAttributeOptionCount += 1;

          const attrEmbedding = await getEmbedding(`${attributeName}: ${attributeOption}`);
          newAttributeOption = await prisma.attributeOption.create({
            data: {
              attribute: attributeName,
              attributeOption: attributeOption,
              embedding: attrEmbedding,
              metadata: { reminder: 'metadata' },
            },
          });

          console.log(
            'Created new attribute option:',
            newAttributeOption.attribute,
            newAttributeOption.attributeOption
          );
        }

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
      message: 'Successfully ingested variant data.',
      newProductCount,
      newVariantCount,
      newAttributeOptionCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error ingesting variant data.', detail: err });
  }
});

export default router;
