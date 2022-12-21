import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import StudentScore from '../models/studentScore';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private fs: Firestore) {}

  getAllQuestions() {
    return collection(this.fs, 'questions');
  }
  addNewDocument(studentScore: StudentScore) {
    const dbInstance = collection(this.fs, 'studentScore');
    return addDoc(dbInstance, { ...studentScore });
  }
}
