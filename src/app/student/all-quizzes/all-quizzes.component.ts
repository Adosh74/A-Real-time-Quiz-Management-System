import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  DocumentReference,
  collectionSnapshots,
} from '@angular/fire/firestore';
import { Subscription, map } from 'rxjs';
import QuizInfo from 'src/app/models/quizInfo';
import { AuthService } from 'src/app/services/auth.service';
import { JoinQuizService } from 'src/app/services/join-quiz.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css'],
})
export class AllQuizzesComponent implements OnInit {
  constructor(
    private QuizService: QuizService,
    private authService: AuthService,
    private joinService: JoinQuizService
  ) {}
  quizzes: any[] = [];
  studentId: string = this.authService.getId();
  quizInfo: QuizInfo = new QuizInfo();
  ngOnInit(): void {
    collectionSnapshots(this.QuizService.getAllQuizzes())
      .pipe(
        map((changes) => {
          return changes.map((c) => {
            return { id: c.id, ...c.data() };
          });
        })
      )
      .subscribe((data) => {
        this.quizzes = data;
        console.log(data);
      });
  }

  chooseQuiz(quizId: string, questionId: string) {
    console.log(this.studentId);
    this.quizInfo.quizId = quizId;
    this.quizInfo.questionID = questionId;
    this.quizInfo.studentId = this.studentId;
    this.joinService.addNewDocument(this.quizInfo).then(() => {
      alert(`you enrolled new quiz`);
    });
  }
}
