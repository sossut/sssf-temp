import express from 'express';
import {
  studentListGet,
  studentGet,
  studentPost,
  studentDelete,
} from '../controllers/studentController';

const router = express.Router();

router.route('/').get(studentListGet).post(studentPost);

router.route('/:studentId').get(studentGet).delete(studentDelete);

export default router;
