import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private afs : AngularFirestore) { } 

  AddProfessor(Professor : any){
    Professor.id = this.afs.createId();
    return this.afs.collection("Professor/").add(Professor);
  }

  getAllProfessors() {
    return this.afs.collection("Professor/").snapshotChanges();
  }
}