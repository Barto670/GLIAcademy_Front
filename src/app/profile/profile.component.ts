import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import * as fs from 'fs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user : any;
  imageArray = ["rectangle.png","star.png"];
  // imageArray :any = [
  //   {
  //     "imageUrl":"rectangle.png",
  //   },
  //   {
  //     "imageUrl":"star.png",
  //   },
  // ];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }

  


  
  
  
  // <img src={images['doggy.png']} />

}
