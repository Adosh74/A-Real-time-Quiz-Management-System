import Person from './person.interface';
interface Student extends Person {
  level?: string;
  grade?: number;
  score?: number;
}

export default Student;
