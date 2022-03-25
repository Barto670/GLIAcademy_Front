import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent} from "./login/login.component"
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TheoryComponent } from './theory/theory.component';
import { Login2Component } from './login2/login2.component';
import { Home2Component } from './home2/home2.component';
import { AppServices } from './app.service';
import { ProfileComponent } from './profile/profile.component';
import { popup } from './profile/popup/popup.component';
import { chat } from './global/navbar/chat/chat.component'
import { AboutComponent } from './about/about.component';
import { AboutLoginComponent } from './aboutLogin/aboutLogin.component';

@NgModule({
imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule, 
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    
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
    popup,
    chat,
    AboutComponent,
    AboutLoginComponent,
    
],
providers: [AppServices ,DatePipe,NavbarComponent],
bootstrap: [AppComponent]
})
export class AppModule {

}