import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {


  public form: FormGroup = new FormGroup({
    type : new FormControl('login'),
    username: new FormControl('',),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  tabChange(){
    console.log(this.form.value.type)
    if(this.form.value.type == "register"){
      this.form.controls['username'].setValidators([Validators.required, Validators.maxLength(20)]);   
    }else{
      this.form.controls['username'].clearValidators();     
      
    }
    this.form.controls['username'].updateValueAndValidity(); 
  }

  login(){
    let loginInfo = {
      email : this.form.value.email,
      password : this.form.value.password
    }
  }

  register(){
    let registerInfo = {
      username : this.form.value.username,
      email : this.form.value.email,
      password : this.form.value.password
    }
  }

}
