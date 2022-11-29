import { Injectable } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import Student from 'src/interfaces/student.interface';

@Injectable()
export class ServerService {
  constructor(private db: Firestore) {}

  addNewDocument(user: Student) {
    const dbInstance = collection(this.db, 'user');
    return addDoc(dbInstance, { ...user });
  }

  addNewDocumentWithSpecificID(user: Student, id: string) {
    const dbInstance = collection(this.db, 'user');
    return setDoc(doc(dbInstance, id), { ...user });
  }

  updateDocument(id: string, name: string, age: number) {
    const dataUpdate = doc(this.db, 'user', id);
    return updateDoc(dataUpdate, {
      name: name,
      age: age,
    });
  }

  getDocument(id: string) {
    const dbInstance = collection(this.db, 'user');
    return getDoc(doc(dbInstance, id));
  }

  getAll() {
    return collection(this.db, 'user');
  }

  deleteDocument(id: string) {
    const dataDelete = doc(this.db, 'user', id);
    return deleteDoc(dataDelete);
  }

  /*SearchForDocInArray(id: string) {
        return this.listOfDocs.find((doc) => {
            return doc.id == id;
        });
    }*/
}
