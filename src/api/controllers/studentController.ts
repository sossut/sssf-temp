import { NextFunction, Request, Response } from 'express';
import StudentModel from '../models/studentModel';
import Student from '../../interfaces/Student';

const studentListGet = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (error) {
    next(error);
  }
};

const studentGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const student = await StudentModel.findById(req.params.studentId);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

const studentPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const student = await StudentModel.create(req.body as Student);
    res.json(student);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const studentDelete = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.studentId);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

export { studentListGet, studentGet, studentPost, studentDelete };
