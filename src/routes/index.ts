import { Router } from 'express';
import ingestConfiguration from './ingestConfiguration';
import ingestVariants from './ingestVariants';
import getVariantSimilarity from './getVariantSimilarity';

const router = Router();

router.use('/ingest-configuration', ingestConfiguration);
router.use('/ingest-variants', ingestVariants);
router.use('/get-variant-similarity', getVariantSimilarity);

export default router;
