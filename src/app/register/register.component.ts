import { Component, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserAuth } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email?: string;
  password?: string;


  constructor(private authService: AuthService,
    private router: Router) { }

  register() {
    let user = new UserAuth(this.email, this.password)
    this.authService.register(user).then((user:UserCredential) => {
      console.log(user.user.uid);
    this.authService.setid(user.user.uid);
      this.router.navigate(['/completeDate']);
    }, (error) => {
      console.log(error);
    });
  }

}
