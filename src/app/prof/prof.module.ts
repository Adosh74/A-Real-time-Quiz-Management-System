import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfComponent } from './prof.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuizdataComponent } from './components/dashboard/quizdata/quizdata.component';
import { AllquizzesComponent } from './components/dashboard/allquizzes/allquizzes.component'



@NgModule({
  declarations: [
    ProfComponent,
    LoginComponent,
    DashboardComponent,
    QuizdataComponent,
    AllquizzesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ProfModule { }
