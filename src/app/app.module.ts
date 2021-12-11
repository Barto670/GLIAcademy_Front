import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { LoginComponent} from "./login/login.component"
import { AppRoutingModule } from './app-routing.module';

@NgModule({
imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule      
],
exports: [RouterModule],
declarations: [
    AppComponent,  
    LoginComponent      
],
bootstrap: [AppComponent]
})
export class AppModule {

}