import { Component, OnInit } from '@angular/core';
import { collectionSnapshots } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css'],
})
export class AllQuizzesComponent implements OnInit {
  constructor(private QuizService: QuizService) {}
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
      });
    console.log(this.quizzes);
  }

  // quizzes = [
  //   {
  //     courseName: 'software engineering-1',
  //     tittle: 'sequence diagram',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseName: 'Software engineering-2',
  //     tittle: 'state machine diagram',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseName: 'Operation researcher',
  //     tittle: 'decision tree',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseName: 'Software engineering-3',
  //     tittle: 'OSI layers',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseName: 'Software engineering-3',
  //     tittle: 'Stack and Queue',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     courseName: 'Software engineering-3',
  //     tittle: 'Linked list and Tree',
  //     questions: [
  //       {
  //         questionText:
  //           '1-Software engineering is the use of sound engineering methods and principles to obtain software that is reliable ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '2-One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '3-Main memory is a place where the programs and data are stored permanently during processing?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'Main memory is used for temporary storage however the HARD drive is permanent storage',
  //       },
  //       {
  //         questionText:
  //           '4-Pseudo-code uses exact programming language syntax to represent a module in the larger program?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '5-An executable file contains code written in a programming language that is to be sent to the compiler?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //         explanation:
  //           'the executable file is a file which is created once the compiler goes through the code basically for the purposes of the course called the a.out',
  //       },
  //       {
  //         questionText:
  //           '6-is float data type of required for all variables in lab ?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '7-The preprocessor prepares the code for translation into machine language?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //       {
  //         questionText: '8-Double space all lines of code in your program?',
  //         options: [
  //           {
  //             text: 'true',
  //           },
  //           {
  //             text: 'false',
  //             correct: 'true',
  //           },
  //         ],
  //       },
  //       {
  //         questionText:
  //           '9- A high-level language allows the programmer to concentrate on the problem at hand and not worry about the machine that the program will be using?',
  //         options: [
  //           {
  //             text: 'true',
  //             correct: 'true',
  //           },
  //           {
  //             text: 'false',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
}
