import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from 'src/app/app.service';
import { NavbarComponent } from '../navbar.component';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chat implements OnInit {

  user : any;

  constructor(private router: Router , private appServices: AppServices, private navbar: NavbarComponent) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }


  submit(){

  }

  close(){
    this.navbar.chat = false
  }

  chooseImage(imageURL :any){
    console.log(imageURL) 

    this.appServices.updateUserImage(this.user.id,imageURL).subscribe( userData => {

      this.user.imageURL = imageURL;

      localStorage.setItem('user', JSON.stringify(this.user));

      this.appServices.showSuccess("Succesfully updated image")

      this.navbar.chat = false
    })
  }

}
