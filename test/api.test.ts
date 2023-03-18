import mongoose from 'mongoose';
import app from '../src/app';
import {
  getAllStudents,
  getStudent,
  postStudent,
  deleteStudent,
} from './testStudent';
import Student from '../src/interfaces/Student';

describe('testing route /api/v1/students', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.DATABASE_URL as string);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  let student: Student;
  it('should add and return a student', async () => {
    const stdnt: Student = {
      name: 'Test Student',
      birthdate: new Date(),
      email: 'a@b.fi',
      major: 'Test Major',
      student_id: 123456,
    };
    student = await postStudent(app, stdnt);
  });

  it('should return all students', async () => {
    await getAllStudents(app);
  });

  it('should return a student', async () => {
    await getStudent(app, student._id!);
  });

  it('should delete and return a student', async () => {
    await deleteStudent(app, student._id!);
  });
});
