import mongoose from 'mongoose';
import Student from '../../interfaces/Student';

const Schema = mongoose.Schema;

const animalSchema = new Schema<Student>({
  name: String,
  birthdate: Date,
  student_id: Number,
  email: String,
  major: String,
});

const StudentModel = mongoose.model<Student>('Student', animalSchema);

export default StudentModel;
