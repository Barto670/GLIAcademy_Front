import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  user: any;
  incorrect! : number;
  successPercent! : number;

  tutorialProgress! : number;
  basicsProgress! : number;
  websitesProgress! : number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }
    

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

    this.incorrect = this.user.answered-this.user.correct;
    this.successPercent = this.user.correct/this.user.answered*100;


    if(this.user.stage > 3){
      this.tutorialProgress = 3;
    }else if(this.user.stage == 0){
      this.tutorialProgress = 0;
    }else{
      this.tutorialProgress = this.user.sectionStage;
    }

    if(this.user.stage > 6){
      this.basicsProgress = 3;
    }else if(this.user.stage <= 3){
      this.basicsProgress = 0;
    }else{
      this.basicsProgress = this.user.sectionStage;
    }

    if(this.user.stage > 10){
      this.websitesProgress = 4;
    }else if(this.user.stage <= 6){
      this.websitesProgress = 0;
    }else{
      this.websitesProgress = this.user.sectionStage;
    }


  }

}
