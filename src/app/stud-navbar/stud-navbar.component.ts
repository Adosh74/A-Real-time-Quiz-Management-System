import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-stud-navbar',
  templateUrl: './stud-navbar.component.html',
  styleUrls: ['./stud-navbar.component.css'],
})
export class StudNavbarComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private authService: AuthService,private router: Router) {}

  logout() {
    this.authService.logout().then(()=>{
      this.router.navigate(['/']);
    });
  }
  

  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen; 
  }


 
  
}
