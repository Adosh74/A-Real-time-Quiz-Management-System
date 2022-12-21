import { Component, OnInit } from '@angular/core';
import { collectionSnapshots } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-allquizzes',
  templateUrl: './allquizzes.component.html',
  styleUrls: ['./allquizzes.component.css'],
})
export class AllquizzesComponent implements OnInit {
  constructor(
    private QuizService: QuizService,
    private authService: AuthService
  ) {}

  quizzes: any[] = [];

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

  deleteQuiz(id: string) {
    try {
      this.QuizService.deleteDocument(id);
      alert(`The quiz has been deleted`);
    } catch (error) {
      alert(`An error has occurred`);
    }
  }
}
