import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { UserAuth } from '../models/auth';

@Injectable()
export class AuthService {


  id:string = "";
setid(id:string){
  this.id=id;
}
getId(){
  return this.id;
}
  constructor(private auth: Auth) { }

  login(userAuth: UserAuth) {
    return signInWithEmailAndPassword(this.auth, userAuth.email!, userAuth.password!);
  }

  register(userAuth: UserAuth) {
    return createUserWithEmailAndPassword(this.auth, userAuth.email!, userAuth.password!);
  }

  logout() {
    this.id = "";

    return signOut(this.auth);
  }
}
