import { Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private fs: Firestore) {}

  getAllQuestions() {
    return collection(this.fs, 'questions');
  }
}
