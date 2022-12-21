import { Component , OnInit,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-newquiz',
  templateUrl: './NewQuiz.component.html',
  styleUrls: ['./NewQuiz.component.css']
})
export class NewQuizComponent implements OnInit{
  
  @ViewChild('name') nameKey! : ElementRef;

  constructor() {}
  ngOnInit(): void {
    
  }
  QuizName(){
     localStorage.setItem("name",this.nameKey.nativeElement.value);
    
  }
}
