import { Component, OnInit } from '@angular/core';
import { authInstance$ } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfAuthService } from 'src/app/services/prof-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  profLoginData = new FormGroup({
    username : new FormControl(),
    password : new FormControl()


  })

  constructor(private fb : FormBuilder , private ProfAuth : ProfAuthService) { }

  ngOnInit(): void {
    this.profLoginData = this.fb.group({
      username : ['', [Validators.email]],
      password : ['', [Validators.minLength(8)]]
    });
  }

  ProfLogin() {
    this.ProfAuth.profLogin(this.profLoginData.value.username , this.profLoginData.value.password);
  }
}
