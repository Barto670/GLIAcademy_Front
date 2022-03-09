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
import { MatIconModule} from '@angular/material/icon';
import { QuizComponent } from './quiz/quiz.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TheoryComponent } from './theory/theory.component';
import { Login2Component } from './login2/login2.component';
import { Home2Component } from './home2/home2.component';
import { AppServices } from './app.service';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule, 
    MatIconModule,
    HttpClientModule,
],
exports: [RouterModule],
declarations: [
    AppComponent,  
    LoginComponent,
    Login2Component,
    HomeComponent,
    Home2Component,
    NavbarComponent,
    QuizComponent,
    StatisticsComponent,
    TheoryComponent,
    ProfileComponent,    
],
providers: [AppServices ,DatePipe,NavbarComponent],
bootstrap: [AppComponent]
})
export class AppModule {

}