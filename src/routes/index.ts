import { Router } from 'express';
import ingestConfiguration from './ingestConfiguration';
import ingestVariants from './ingestVariants';

const router = Router();

router.use('/ingest-configuration', ingestConfiguration);
router.use('/ingest-variants', ingestVariants);

export default router;
