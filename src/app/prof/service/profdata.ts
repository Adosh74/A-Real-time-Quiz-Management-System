import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/quiz';
import {HttpClient} from '@angular/common/http';
import { AllquizzesComponent } from '../components/dashboard/allquizzes/allquizzes.component';
import { QuizdataComponent } from '../components/dashboard/quizdata/quizdata.component';

@Injectable({
  providedIn: 'root'
})
export class profdata{

  dataUrl : string = 'https://localhost:4200/prof/quizbe';
  constructor(private http : HttpClient) { }

  addQuiz(QuizObj : Quiz) : Observable<Quiz> {
    return this.post<Quiz>(this.dataUrl, QuizObj);
  }
  post<T>(dataUrl: string, QuizObj: Quiz): Observable<Quiz> {
    throw new Error('Method not implemented.');
  }
  getAllQuizzes() : Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.dataUrl);
    

  }
}