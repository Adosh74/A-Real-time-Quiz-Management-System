import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import {
  addDoc,
  Firestore,
  collection,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import Quiz from '../models/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  getDocument(ref: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private fs: Firestore) {}

  getAllQuizzes() {
    return collection(this.fs, 'quizzes');
  }

  addNewDocumentquiz(quiz: Quiz) {
    const dbInstance = collection(this.fs, 'quizzes');
    return addDoc(dbInstance, { ...quiz });
  }



  addNewDocumentWithSpecificID(quiz: Quiz, courseName: string) {
    const dbInstance = collection(this.fs, 'quizzes');
    return setDoc(doc(dbInstance, courseName), { ...quiz });
  }

  updateDocument(
    courseName: string,
    des: string,
    tittle: string,
    quiznumber: number,
  ) {
    const dataUpdate = doc(this.fs, 'quizzes', courseName);
    return updateDoc(dataUpdate, {
      courseName: courseName,
      des: des,
      tittle: tittle,
      quiznumber: quiznumber,
    });
  }

  getDocuments(courseName: string) {
    const dbInstance = collection(this.fs, 'quizzes');
    return getDoc(doc(dbInstance, courseName));
  }

}
