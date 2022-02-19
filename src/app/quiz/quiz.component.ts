import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  nextButton = false;
  checkAnswer = true;

  correctAnswer = false;
  wrongAnswer = false;

  constructor() { }

  ngOnInit(): void {
  }

  turnOnNextButton(){
    this.nextButton = true;
    this.checkAnswer = false;
    var element = <HTMLInputElement> document.getElementById("nextButton");
    element.disabled = false;
  }

  turnOnCheckAnswerButton(){
    this.checkAnswer = true;
    this.nextButton = false;
    var element = <HTMLInputElement> document.getElementById("checkAnswer");
    element.disabled = false;
  }

  quizClicked(question: any){
    
    this.turnOnCheckAnswerButton();
    //button clicked
    let element:any = <HTMLInputElement> document.getElementById(question);

    //all buttons off
    let elements:any = <HTMLInputElement> document.getElementById("answer1");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("answer2");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("answer3");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("answer4");
    elements.setAttribute("selected", "false");

    //clicked button on
    element.setAttribute("selected", "true");

    console.log(element)
  }

  checkUserAnswer(){

  }

}
