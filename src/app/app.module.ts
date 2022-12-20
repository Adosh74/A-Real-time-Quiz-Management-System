import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { Routes, RouterModule } from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { RecieveComponent } from './recieve/recieve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ServerService } from './services/server.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudNavbarComponent } from './stud-navbar/stud-navbar.component';
import { MainHomesdComponent } from './student/main-homesd/main-homesd.component';
import { AllQuizzesComponent } from './student/all-quizzes/all-quizzes.component';
import { QuizDetailComponent } from './student/quiz-detail/quiz-detail.component';
import { LoginProfComponent } from './prof/login-prof/login-prof.component';
import { HomeprofComponent } from './prof/homeprof/homeprof.component';

const appRoutes: Routes = [
  { path: '', component: MainHomesdComponent },
  { path: 'recieve', component: RecieveComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'completeDate', component: SenderComponent },
  { path: 'quizzes', component: AllQuizzesComponent },
  { path: 'quiz', component: QuizDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    RecieveComponent,
    LoginComponent,
    RegisterComponent,
    StudNavbarComponent,
    MainHomesdComponent,
    AllQuizzesComponent,
    QuizDetailComponent,
    LoginProfComponent,
    HomeprofComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    NgbModule,
  ],
  providers: [ServerService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
