import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { TheoryComponent } from './theory/theory.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { Login2Component } from './login2/login2.component';
import { Home2Component } from './home2/home2.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutLoginComponent } from './aboutLogin/aboutLogin.component';
import { QuestionComponent } from './question/question.component';
// import { ContactUsComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'login2', component: LoginComponent, data: { title: 'Login2' } },
  { path: 'login', component: Login2Component, data: { title: 'Login' } },
  { path: 'home2', component: HomeComponent, data: { title: 'Home2' } },
  { path: 'home', component: Home2Component, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'quiz', component: QuizComponent, data: { title: 'Quiz' } },
  { path: 'theory', component: TheoryComponent, data: { title: 'Theory' } },
  { path: 'statistics', component: StatisticsComponent, data: { title: 'Statistics' } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'aboutus', component: AboutLoginComponent, data: { title: 'About Us' } },
  { path: 'question', component: QuestionComponent, data: { title: 'Question' } },
  // { path: 'contactus', component: ContactUsComponent, data: { title: 'Contact Us' } },



  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Login2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
