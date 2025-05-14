import { Router } from 'express';
import prisma from '../lib/prisma';
import type { VariantData } from '../types';
import { canonicalize, standardizeFormatting, convertToNaturalLanguage } from './utilities';
// import { getEmbedding } from '../openai';
// import { getEmbedding } from '../hugging-face/e5-base-v2';
// import { getEmbedding } from '../hugging-face/gte-small';
// import { getEmbedding } from '../hugging-face/bge-small-en-v1.5';
import { getEmbedding } from '../hugging-face/gte-large';

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
      // const configurationString = standardizeFormatting(JSON.stringify(canonicalize(v)));

      // Testing out describing the configuration as natural language.
      const sortedConfiguration = canonicalize(v);

      let newVariant = await prisma.variant.findUnique({
        where: {
          productName_configuration: {
            productName,
            configuration: JSON.stringify(sortedConfiguration),
          },
        },
      });

      if (!newVariant) {
        newVariantCount += 1;

        const naturalLanguageConfiguration = convertToNaturalLanguage(
          productName,
          sortedConfiguration
        );

        const variantEmbedding = await getEmbedding(
          standardizeFormatting(naturalLanguageConfiguration)
        );
        newVariant = await prisma.variant.create({
          data: {
            productId: newProduct.id,
            productName,
            configuration: JSON.stringify(sortedConfiguration),
            nlConfiguration: naturalLanguageConfiguration,
            embedding: variantEmbedding,
            metadata: { reminder: 'metadata' },
          },
        });

        console.log('Created new variant:', newVariant.configuration);
      }

      for (const [attribute, attributeOption] of Object.entries(sortedConfiguration)) {
        if (!attribute || !attributeOption) continue;

        let newAttributeOption = await prisma.attributeOption.findUnique({
          where: {
            attribute_attributeOption: {
              attribute,
              attributeOption: JSON.stringify(attributeOption),
            },
          },
        });

        if (!newAttributeOption) {
          newAttributeOptionCount += 1;

          const attributeEmbedding = await getEmbedding(
            standardizeFormatting(
              `This product has customized ${attribute} with the choice ${attributeOption}.`
            )
          );
          newAttributeOption = await prisma.attributeOption.create({
            data: {
              attribute,
              attributeOption: JSON.stringify(attributeOption),
              embedding: attributeEmbedding,
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
