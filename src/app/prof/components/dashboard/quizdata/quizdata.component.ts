import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Number } from 'mongoose';
import { Quiz } from 'src/app/models/quiz';
import { profdata } from 'src/app/prof/service/profdata';

@Component({
  selector: 'app-quizdata',
  templateUrl: './quizdata.component.html',
  styleUrls: ['./quizdata.component.css']
})
export class QuizdataComponent implements OnInit {

  QuizDetailsForm = new FormGroup({
    quiz_name : new FormControl(),
    quiz_Id : new FormControl(),
    course_name : new FormControl(),
    quiz_date :new FormControl(),
    list_of_questions: new FormControl() 
  })

  QuizObj : Quiz = {
    quiz_name : '',
    quiz_Id : 0 ,
    course_name : '',
    quiz_date : '',
    list_of_questions: 0
  }

  AllQuizzes : Quiz[] = [];
  constructor(private fb: FormBuilder , private dataService : profdata) { }

  ngOnInit(): void {
    this.AllQuizzes = [];
    this.QuizDetailsForm = this.fb.group({
      quiz_name : ['', [Validators.required]],
      quiz_Id : ['', [Validators.required]],
      course_name : ['', [Validators.required]],
      quiz_date :['', [Validators.required]],
      list_of_questions: ['', [Validators.required]] 
    })
    this.getAllStudents();
    
  }

  AddNewQuiz(){
    console.log(this.QuizDetailsForm.value);
    this.QuizObj.quiz_name = this.QuizDetailsForm.value.quiz_name,
    this.QuizObj.quiz_Id = this.QuizDetailsForm.value.quiz_Id,
    this.QuizObj.course_name = this.QuizDetailsForm.value.course_name,
    this.QuizObj.quiz_date = this.QuizDetailsForm.value.quiz_date,
    this.QuizObj.list_of_questions = this.QuizDetailsForm.value.list_of_questions
    this.QuizObj.quiz_Id= this.getQuizId();

    this.dataService.addQuiz(this.QuizObj).subscribe(res => {
      console.log('Quiz has been added successfully');
      this.ngOnInit();
    }, err => {
      console.log('Error occured' + err);

    })
  }
  getQuizId() : number {
    if(this.AllQuizzes.length === 0) {
      return 1;
    }
    return this.AllQuizzes.length+1;

  }
  getAllStudents() {
    this.dataService.getAllQuizzes().subscribe(res => {
      console.log(res);
      this.AllQuizzes = res;

    }, err => {
      console.log(err);

    })
  }
  getQuiz(quiz : Quiz) {
    this.QuizDetailsForm = this.fb.group({
      quiz_Id : quiz.quiz_Id,
      quiz_name : quiz.quiz_name,
      course_name : quiz.course_name,
      quiz_date : quiz.quiz_date,
      list_of_questions: quiz.list_of_questions 


    })
  }
}
