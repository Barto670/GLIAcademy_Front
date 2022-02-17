import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { QuizComponent } from './quiz/quiz.component';
import { TheoryComponent } from './theory/theory.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'browse', component: BrowseComponent, data: { title: 'Browse' } },
  { path: 'quiz', component: QuizComponent, data: { title: 'Quiz' } },
  { path: 'thory', component: TheoryComponent, data: { title: 'Theory' } },
  { path: 'quiz', component: QuizComponent, data: { title: 'Quiz' } },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
