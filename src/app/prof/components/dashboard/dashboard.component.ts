import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  quiz : boolean = false;
  students : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.ShowQuizData();
  }

  setoff(){
    this.quiz = false;
    this.students = false;
  }

  AddQuiz(){
    this.setoff();
    this.quiz=true;

  }

  EditQuiz() {
    this.setoff();
    this.quiz=true;

  }

  AllQuizzes() {
    this.setoff();
    this.quiz=true;

  }

  TrackStudents(){
    this.setoff();
    this.students=true;

  }

  ShowQuizData(){
    this.setoff();
    this.quiz=true;

  }

  SignOut(){

  }
}
