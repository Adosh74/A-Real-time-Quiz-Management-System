import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stud-navbar',
  templateUrl: './stud-navbar.component.html',
  styleUrls: ['./stud-navbar.component.css'],
})
export class StudNavbarComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
