import request from 'supertest';
import Student from '../src/interfaces/Student';
import { Types, ObjectId } from 'mongoose';

const getAllStudents = async (url: string | Function): Promise<Student[]> => {
  return new Promise((resolve, reject) => {
    request(url)
      .get('/api/v1/students')
      .expect(200)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        const students = res.body as Student[];
        students.forEach((student) => {
          const test = student._id as unknown as string;
          expect(Types.ObjectId.isValid(test)).toBeTruthy();
          expect(student.name).not.toBe('');
          expect(student.birthdate).not.toBe('');
          expect(student.student_id).toBeGreaterThan(0);
          expect(student.email).not.toBe('');
          expect(student.major).not.toBe('');
        });
        resolve(students);
      });
  });
};

const getStudent = async (
  url: string | Function,
  id: ObjectId,
): Promise<Student> => {
  return new Promise((resolve, reject) => {
    request(url)
      .get(`/api/v1/students/${id}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        const student = res.body as Student;
        const test = student._id as unknown as string;
        expect(Types.ObjectId.isValid(test)).toBeTruthy();
        expect(student.name).not.toBe('');
        expect(student.birthdate).not.toBe('');
        expect(student.student_id).toBeGreaterThan(0);
        expect(student.email).not.toBe('');
        expect(student.major).not.toBe('');
        resolve(student);
      });
  });
};

const postStudent = async (
  url: string | Function,
  stdnt: Student,
): Promise<Student> => {
  return new Promise((resolve, reject) => {
    request(url)
      .post('/api/v1/students')
      .send(stdnt)
      .expect(200)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        const student = res.body as Student;
        const test = student._id as unknown as string;
        expect(Types.ObjectId.isValid(test)).toBeTruthy();
        expect(student.name).not.toBe('');
        expect(student.birthdate).not.toBe('');
        expect(student.student_id).toBeGreaterThan(0);
        expect(student.email).not.toBe('');
        expect(student.major).not.toBe('');
        resolve(student);
      });
  });
};

const deleteStudent = async (
  url: string | Function,
  id: ObjectId,
): Promise<Student> => {
  return new Promise((resolve, reject) => {
    request(url)
      .delete(`/api/v1/students/${id}`)
      .expect(200)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        const student = res.body as Student;
        const test = student._id as unknown as string;
        expect(Types.ObjectId.isValid(test)).toBeTruthy();
        expect(student.name).not.toBe('');
        expect(student.birthdate).not.toBe('');
        expect(student.student_id).toBeGreaterThan(0);
        expect(student.email).not.toBe('');
        expect(student.major).not.toBe('');
        resolve(student);
      });
  });
};

export { getAllStudents, getStudent, postStudent, deleteStudent };
