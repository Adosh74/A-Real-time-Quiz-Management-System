import { Component, OnDestroy, OnInit } from '@angular/core';
import { collectionSnapshots } from '@angular/fire/firestore';
import { Subscription, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css'],
})
export class AllQuizzesComponent implements OnInit {
  constructor(
    private QuizService: QuizService,
    private authService: AuthService
  ) {}
  quizzes: any[] = [];
  studentId: string = this.authService.getId();

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

  chooseQuiz(quizId: number, questionId: number) {
    alert(`${quizId} ++ ${questionId} ++ `);
    console.log(this.studentId);
  }
}
