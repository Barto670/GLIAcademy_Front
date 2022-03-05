import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  constructor(routing : Router) { }

  ngOnInit(): void {
  }

  // goTo(page:String){
  //   switch(page){
  //     case 'theory':{
  //       routing.navigate(['/'])
  //     }
  //   }
  // }

}
