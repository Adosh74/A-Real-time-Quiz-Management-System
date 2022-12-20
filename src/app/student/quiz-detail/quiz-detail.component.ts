import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css'],
})
export class QuizDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  answerObj = {
    index: 0,
    answer: '',
  };
  sdAnswer: any[] = [];
  questions: any[] = [
    {
      questionText:
        '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
      answer: 'false',
    },
    {
      questionText:
        '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
      answer: 'true',
    },
    {
      questionText:
        '3-Main memory is a place where the programs and data are stored permanently during processing?',
      answer: 'true',
    },
  ];

  answerFalse(index: number) {
    this.answerObj.index = index;
    this.answerObj.answer = 'false';
    this.sdAnswer.push(this.answerObj);
    console.log(`${this.answerObj.answer} ${this.answerObj.index}`);
    console.log(...this.sdAnswer);
  }
  finalScore: number = 0;
  finish() {
    try {
      for (var i = 0; i < this.questions.length; i++) {
        if (this.questions[i].answer == this.sdAnswer[i].answer) {
          this.finalScore = this.finalScore + 1;
        }
      }
      alert(`your score is ${this.finalScore}`);
    } catch (error) {
      alert(`please solve all questions`);
    }
  }
}
