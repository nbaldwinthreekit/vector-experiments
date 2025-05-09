import { Router } from 'express';
import prisma from '../lib/prisma';
import { calcCosineSimilarity, calcVectorNorm, standardizeFormatting } from './utilities';
// import { getEmbedding } from '../openai';
// import { getEmbedding } from '../hugging-face/e5-base-v2';
// import { getEmbedding } from '../hugging-face/gte-small';
// import { getEmbedding } from '../hugging-face/bge-small-en-v1.5';
import { getEmbedding } from '../hugging-face/gte-large';
import { Heap } from 'heap-js';

const router = Router();

// Compares a variant's full configuration vector to the sum of individual "attribute: option" embeddings.

router.post('/', async (req, res) => {
  try {
    const { userQuery, productName, resultsRequested } = req.body;

    const variantSorter = new Heap<[number, string]>((a, b) => b[0] - a[0]);
    const userQueryVector = await getEmbedding(standardizeFormatting(userQuery));
    const userQueryVectorNorm = calcVectorNorm(userQueryVector);

    const variants = await prisma.variant.findMany({
      where: {
        productName,
      },
    });

    for (const variant of variants) {
      const variantConfigurationVector = variant.embedding as number[];
      const variantConfigurationVectorNorm = calcVectorNorm(variantConfigurationVector);

      const cosineSimilarity = calcCosineSimilarity(
        userQueryVector,
        variantConfigurationVector,
        userQueryVectorNorm,
        variantConfigurationVectorNorm
      );

      variantSorter.push([cosineSimilarity, variant.configuration]);
    }

    const topKVariants = [];
    for (let i = 0; i < Number(resultsRequested); i++) {
      topKVariants.push(variantSorter.pop());
    }

    res.json({ productName, resultsRequested, topKVariants });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Error processing request: ${err}` });
  }
});

export default router;
