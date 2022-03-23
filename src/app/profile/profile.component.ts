import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from '../app.service';
// import * as fs from 'fs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user : any;

  popup = false;
  // imageArray :any = [
  //   {
  //     "imageUrl":"rectangle.png",
  //   },
  //   {
  //     "imageUrl":"star.png",
  //   },
  // ];

  public form: FormGroup = new FormGroup({
    email: new FormControl({value:'',disabled: true}, [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });
  
  constructor(private httpClient: HttpClient, private router: Router, private appServices: AppServices) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

    this.form.patchValue({
      email: this.user.email,
      firstName: this.user.firstName,
      secondName: this.user.secondName,
      username: this.user.username,
    });

 
  }

  

  changeImage(){
    this.popup = true;
  }
  

  updateImage(){
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }

  updateProfile(){
    console.log(this.form)

    this.appServices.updateUser(this.form.value,this.user.id).subscribe( data => {


      this.user.firstName = this.form.value.firstName;
      this.user.secondName = this.form.value.secondName;
      this.user.username = this.form.value.username;

      localStorage.setItem('user', JSON.stringify(this.user));

      this.appServices.showSuccess("Succesfully updated profile")

    })
  }
  
  
  
  // <img src={images['doggy.png']} />

}
