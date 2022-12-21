import { Component, OnInit } from '@angular/core';
import { DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import User from '../models/user';
import { ServerService } from '../services/server.service';
import { UserCredential } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {
  name: string = '';
  age: number = 2;
  level: number = 1;
  gpa: number = 4;
  user: User;
  ref?: string = this.authService.getId();
  constructor(
    private serverService: ServerService,
    private authService: AuthService
  ) {
    this.user = new User();
  }

  /*addNewDocument() {
    this.user.name = this.name;
    this.user.age = this.age;
    this.user.level=this.level;
    this.user.gpa=this.gpa;

    this.serverService.addNewDocument(this.user).then((ref: DocumentReference) => {
      console.log("Document Id: " + ref.id);
      this.ref = ref.id
    });
  }
*/
  addNewDocumentwithSpecificID() {
    this.user.name = this.name;
    this.user.age = this.age;
    this.user.level = this.level;
    this.user.gpa = this.gpa;

    if (this.ref != null) {
      this.serverService
        .addNewDocumentWithSpecificID(this.user, this.ref!)
        .then(() => {
          alert('data added ✔');
        });
    } else {
      alert('document Id is required');
    }
  }

  updateDocument() {
    this.user.name = this.name;
    this.user.age = this.age;
    this.user.level = this.level;
    this.user.gpa = this.gpa;
    if (this.ref != null) {
      this.serverService
        .updateDocument(this.ref, this.name, this.age, this.level, this.gpa)
        .then(() => {
          alert('updated');
        });
    } else {
      alert('document Id is required');
    }
  }

  getDocument() {
    if (this.ref != null) {
      this.serverService
        .getDocument(this.ref)
        .then((data: DocumentSnapshot) => {
          this.name = data?.data()?.['name'];
          this.age = data?.data()?.['age'];
          this.level = data?.data()?.['level'];
          this.gpa = data?.data()?.['gpa'];
          this.ref = data.id;
        });
    } else {
      alert('document Id is required');
    }
  }

  delete() {
    if (this.ref != null) {
      this.serverService.deleteDocument(this.ref).then(() => {
        alert('deleted');
      });
    } else {
      alert('document Id is required');
    }
  }

  reset() {
    this.name = null!;
    this.age = null!;
    this.ref = null!;
    this.level = null!;
    this.gpa = null!;
  }
}
