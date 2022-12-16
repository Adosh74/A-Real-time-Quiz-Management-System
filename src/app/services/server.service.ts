import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
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
import User from '../models/user';

@Injectable()
export class ServerService {
  listOfDocs: any[] = [];
  constructor(private db: Firestore) {}

  addNewDocument(user: User) {
    const dbInstance = collection(this.db, 'users');
    return addDoc(dbInstance, { ...user });
  }

  addNewDocumentWithSpecificID(user: User, id: string) {
    const dbInstance = collection(this.db, 'users');
    return setDoc(doc(dbInstance, id), { ...user });
  }

  updateDocument(
    id: string,
    name: string,
    age: number,
    level: number,
    gpa: number
  ) {
    const dataUpdate = doc(this.db, 'users', id);
    return updateDoc(dataUpdate, {
      name: name,
      age: age,
      level: level,
      gpa: gpa,
    });
  }

  getDocument(id: string) {
    const dbInstance = collection(this.db, 'users');
    return getDoc(doc(dbInstance, id));
  }

  getAll() {
    return collection(this.db, 'users');
  }

  deleteDocument(id: string) {
    const dataDelete = doc(this.db, 'users', id);
    return deleteDoc(dataDelete);
  }

  SearchForDocInArray(id: string) {
    return this.listOfDocs.find((doc) => {
      return doc.id == id;
    });
  }
}
