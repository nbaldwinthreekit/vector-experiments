import { Router } from 'express';
import searchAttributes from './searchAttributes';
import digestConfiguration from './digestConfiguration';

const router = Router();

router.use('/search', searchAttributes);
router.use('/digest', digestConfiguration);

export default router;
