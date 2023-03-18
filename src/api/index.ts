import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import studentRoute from './routes/studentRoute';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'just testing azure',
  });
});

router.use('/students', studentRoute);

export default router;
