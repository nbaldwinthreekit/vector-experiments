import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
  // Handle embedding generation
  res.json({ message: 'digest-configuration route hit' });
});

export default router;