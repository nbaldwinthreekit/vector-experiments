import { Router } from 'express';
import searchAttributes from './searchAttributes';
import ingestConfiguration from './ingestConfiguration';

const router = Router();

router.use('/search', searchAttributes);
router.use('/digest', ingestConfiguration);

export default router;
