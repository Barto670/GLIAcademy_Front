import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from 'src/app/app.service';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class popup implements OnInit {

  user : any;
  imageArray = ["rectangle.png","star.png","default.png","badge.png","badge2.png","bolt.png","star2.png","3.png","heart.png","square.png","star3.png","circle.png"];
  constructor(private router: Router , private appServices: AppServices, private profileComponent: ProfileComponent) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }


  submit(){

  }

  close(){
    this.profileComponent.popup = false
  }

  chooseImage(imageURL :any){
    console.log(imageURL) 

    this.appServices.updateUserImage(this.user.id,imageURL).subscribe( userData => {

      this.user.imageURL = imageURL;

      localStorage.setItem('user', JSON.stringify(this.user));

      this.profileComponent.updateImage()

      this.appServices.showSuccess("Succesfully updated image")

      this.profileComponent.popup = false
    })
  }

}
