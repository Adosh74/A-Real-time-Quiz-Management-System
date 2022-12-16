import { Injectable } from '@angular/core';
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
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private fs: Firestore) {}

  getAllQuizzes() {
    return collection(this.fs, 'quizzes');
  }
}
