import { ObjectId } from 'mongoose';

export default interface Student {
  _id?: ObjectId;
  name: string;
  birthdate: Date;
  student_id: number;
  email: string;
  major: string;
}
