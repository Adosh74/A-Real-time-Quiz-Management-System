import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

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
import QuizInfo from '../models/quizInfo';

@Injectable({
  providedIn: 'root',
})
export class JoinQuizService {
  constructor(private db: Firestore, private authService: AuthService) {}

  studentId: string = this.authService.getId();

  addNewDocument(quizInfo: QuizInfo) {
    const dbInstance = collection(this.db, `users/${quizInfo.studentId}/quiz`);
    return addDoc(dbInstance, { ...quizInfo });
  }

  getAll() {
    return collection(this.db, 'quizInfo');
  }
}
