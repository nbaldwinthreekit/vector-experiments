import { Router } from 'express';
import ingestConfiguration from './ingestVariants';

const router = Router();

router.use('/ingest-variants', ingestConfiguration);

export default router;
