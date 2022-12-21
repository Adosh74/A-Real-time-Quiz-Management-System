import { Component, OnInit } from '@angular/core';
import Questions from 'src/app/models/questions';
import { QuestionService } from 'src/app/services/question.service'
import { UserCredential } from '@angular/fire/auth';
import { DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent  {
  question!:Questions;
  questionText : string='';
  answer :boolean =true;
  ref?: string; 
  constructor(
    private questionService: QuestionService,
  ) {
    this.question=new Questions();
   }


     
addNewQuestion() {
  this.question.questionText = this.questionText;
    this.question.answer = this.answer;
    

  this.questionService.addNewDocumentquiz(this.question).then((ref: DocumentReference) => {
    console.log("Document Id: " + ref.id);
    this.ref = ref.id

  });
}

getDocument() {
  if (this.ref != null) {
    this.questionService.getDocuments(this.ref)
      .then((data: DocumentSnapshot) => {
        this.questionText = data?.data()?.['questionText'];
        this.answer = data?.data()?.['answer'];
        this.ref = data.id;
      });
  } else {
    alert('document Id is required');
  }
}
 
  ngOnInit(): void {
  }

}
