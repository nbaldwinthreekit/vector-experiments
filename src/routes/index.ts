import { Router } from 'express';
import ingestConfiguration from './ingestConfiguration';
import ingestVariants from './ingestVariants';
import getComposedVectorSimilarity from './getComposedVectorSimilarity';
import getComposedVectorSimilarityBulk from './getComposedVectorSimilarityBulk';

const router = Router();

router.use('/ingest-configuration', ingestConfiguration);
router.use('/ingest-variants', ingestVariants);
router.use('/get-composed-vector-similarity', getComposedVectorSimilarity);
router.use('/get-composed-vector-similarity-bulk', getComposedVectorSimilarityBulk);

export default router;
