import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from 'src/app/app.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class popup implements OnInit {

  user : any;
  imageArray = ["rectangle.png","star.png"];
  constructor(private router: Router , private appService: AppServices) { }

  ngOnInit(): void {
  }


  submit(){

  }

}
