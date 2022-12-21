import { Component, OnInit } from '@angular/core';
import Quiz from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service'
import { UserCredential } from '@angular/fire/auth';
import { DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent  {
  quiz!: Quiz;
  courseName : string='';
  des : string='';
  tittle : string='';
  quiznumber : number=1;
  ref?: string; 
   constructor(
    private quizservice: QuizService,
  ) {  
   this.quiz=new Quiz();
    
  }

  
addNewQuiz() {
  this.quiz.courseName = this.courseName;
    this.quiz.des = this.des;
    this.quiz.tittle = this.tittle;
    this.quiz.quiznumber = this.quiznumber;


  this.quizservice.addNewDocumentquiz(this.quiz).then((ref: DocumentReference) => {
    console.log("Document Id: " + ref.id);
    this.ref = ref.id

  });
}
getDocument() {
  if (this.ref != null) {
    this.quizservice.getDocuments(this.ref)
      .then((data: DocumentSnapshot) => {
        this.courseName = data?.data()?.['courseName'];
        this.des = data?.data()?.['des'];
        this.tittle = data?.data()?.['tittle'];
        this.quiznumber = data?.data()?.['quiznumber'];
        this.ref = data.id;
      });
  } else {
    alert('document Id is required');
  }
}

}