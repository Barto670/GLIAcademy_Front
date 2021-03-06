import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  user:any = [];


  public form: FormGroup = new FormGroup({
    type : new FormControl('login'),
    username: new FormControl('',),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName : new FormControl('',),
    secondName : new FormControl('',),
  });

  constructor(private router: Router , private appServices: AppServices) { }

  ngOnInit(): void {
  }

  tabChange(){
    console.log(this.form.value.type)
    if(this.form.value.type == "register"){
      this.form.controls['username'].setValidators([Validators.required, Validators.maxLength(20)]);   
      this.form.controls['firstName'].setValidators([Validators.required, Validators.maxLength(30)]); 
      this.form.controls['secondName'].setValidators([Validators.required, Validators.maxLength(30)]); 
    }else{
      this.form.controls['username'].clearValidators();     
      this.form.controls['firstName'].clearValidators();   
      this.form.controls['secondName'].clearValidators();   
      
    }
    this.form.controls['username'].updateValueAndValidity(); 
    this.form.controls['firstName'].updateValueAndValidity(); 
    this.form.controls['secondName'].updateValueAndValidity(); 
  }

  login(){
    let loginInfo = {
      email : this.form.value.email,
      password : this.form.value.password
    }

    this.appServices.login(loginInfo).subscribe( userData => {
      localStorage.setItem('user', JSON.stringify(userData));

      this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

      console.log(this.user);
      this.router.navigate(['/home']);
    })

    
  }

  register(){
    let registerInfo = {
      username : this.form.value.username,
      email : this.form.value.email,
      password : this.form.value.password,
      answered : 0,
      correct : 0,
      firstName : this.form.value.firstName,
      secondName : this.form.value.secondName,
      level : "Beginner",
      sectionStage : 1,
      section : 'Tutorial',
      stage : 1,
      successPercent : 0,
      imageURL : 'rectangle.png'
    }

    //login after user creates an account
    this.appServices.addUser(registerInfo).subscribe( data => {
      localStorage.setItem('user', JSON.stringify(registerInfo));
      this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

      this.router.navigate(['/home']);
    })
  }

  aboutus(){
    this.router.navigate(['/aboutus'])
  }

}
