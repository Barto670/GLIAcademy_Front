import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent} from "./login/login.component"
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { QuizComponent } from './quiz/quiz.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TheoryComponent } from './theory/theory.component';

@NgModule({
imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule, 
    MatIconModule  
],
exports: [RouterModule],
declarations: [
    AppComponent,  
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    QuizComponent,
    StatisticsComponent,
    TheoryComponent    
],
bootstrap: [AppComponent]
})
export class AppModule {

}