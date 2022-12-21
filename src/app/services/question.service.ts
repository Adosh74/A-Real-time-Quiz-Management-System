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
import Questions from '../models/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private fs: Firestore) {}

  getAllQuestions() {
    return collection(this.fs, 'questions');
  }


  addNewDocumentquiz(question: Questions) {
    const dbInstance = collection(this.fs, 'questions');
    return addDoc(dbInstance, { ...question });
  }

  addNewDocumentWithSpecificID(question: Questions, questionText: string) {
    const dbInstance = collection(this.fs, 'questions');
    return setDoc(doc(dbInstance, questionText), { ...question });
  }

  updateDocument(
    questionText: string,
    answer: boolean,
   
  ) {
    const dataUpdate = doc(this.fs, 'questions', questionText);
    return updateDoc(dataUpdate, {
      questionText: questionText,
      answer: answer,
    });
  }

  getDocuments(questionText: string) {
    const dbInstance = collection(this.fs, 'questions');
    return getDoc(doc(dbInstance, questionText));
  }

}
