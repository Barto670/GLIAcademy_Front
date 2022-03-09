import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from '../app.service';

@Component({
  selector: 'home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  user :any;
  quizCount : any = "";

  constructor(private router: Router, private appServices: AppServices) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

    this.getQuizTypeCount();
  }

  getQuizTypeCount(){
    this.appServices.getQuestionTypeCount(this.user.section).subscribe( data => {
      this.quizCount = data;
    })
  }

  // goTo(page:String){
  //   switch(page){
  //     case 'theory':{
  //       routing.navigate(['/'])
  //     }
  //   }
  // }

}
