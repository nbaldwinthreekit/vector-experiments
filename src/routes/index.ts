import { Router } from 'express';
import ingestConfiguration from './ingestConfiguration';
import ingestVariants from './ingestVariants';
import getComposedVectorSimilarity from './getComposedVectorSimilarity';
import getComposedVectorSimilarityBulk from './getComposedVectorSimilarityBulk';
import getVariantsBySematicSearch from './getVariantsBySemanticSearch';

const router = Router();

router.use('/ingest-configuration', ingestConfiguration);
router.use('/ingest-variants', ingestVariants);
router.use('/get-composed-vector-similarity', getComposedVectorSimilarity);
router.use('/get-composed-vector-similarity-bulk', getComposedVectorSimilarityBulk);
router.use('/get-variants-by-semantic-search', getVariantsBySematicSearch);

export default router;
