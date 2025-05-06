import { Router } from 'express';
import ingestConfiguration from './ingestConfiguration';

const router = Router();

router.use('/ingest-configuration', ingestConfiguration);

export default router;
