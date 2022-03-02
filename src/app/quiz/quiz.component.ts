import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  //disabling and enabling buttons
  questionClickedDisabled = true;
  questionCheckedAnswer = false;

  //after a question is answered
  correctAnswer = false;
  wrongAnswer = false;

  //the question we answer
  questionAnswered : number = 0;

  //the correct answer number
  correctAnswerNumber : number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  //when the user clicks on any answer we turn the button on
  turnOnCheckAnswerButton(){
    this.questionClickedDisabled = false;
  }

  //when the user clicks on 'check answer'
  turnOnNextButton(){
    this.questionCheckedAnswer = true;
    
     //all buttons off and disable them
     let elements:any = <HTMLInputElement> document.getElementById("1");
     elements.setAttribute("selected", "false");
     elements.setAttribute("disabled", "true");
     elements = <HTMLInputElement> document.getElementById("2");
     elements.setAttribute("selected", "false");
     elements.setAttribute("disabled", "true");
     elements = <HTMLInputElement> document.getElementById("3");
     elements.setAttribute("selected", "false");
     elements.setAttribute("disabled", "true");
     elements = <HTMLInputElement> document.getElementById("4");
     elements.setAttribute("selected", "false");
     elements.setAttribute("disabled", "true");

     //check if user answered correctly
     if(this.questionAnswered == this.correctAnswerNumber){
        this.correctAnswer = true;
     }else{
        this.wrongAnswer = true;
     }

     //highlight the correct answer
     elements = <HTMLInputElement> document.getElementById(this.correctAnswerNumber.toString());
     elements.setAttribute("selected", "true");
     
  }

  

  quizClicked(question: any){
    this.questionAnswered = question;
    this.turnOnCheckAnswerButton();
    //button clicked
    let element:any = <HTMLInputElement> document.getElementById(question);

    //all buttons off
    let elements:any = <HTMLInputElement> document.getElementById("1");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("2");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("3");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("4");
    elements.setAttribute("selected", "false");

    //clicked button on
    element.setAttribute("selected", "true");

    console.log(element)
  }

  onNextButtonClicked(){

    //switch to next question




    //disabling and enabling buttons
    this.questionClickedDisabled = true;
    this.questionCheckedAnswer = false;

    //after a question is answered
    this.correctAnswer = false;
    this.wrongAnswer = false;

    //the question we answer
    this.questionAnswered = 0;

    //the correct answer number
    this.correctAnswerNumber = 3;

    //all buttons off and disable them
    let elements:any = <HTMLInputElement> document.getElementById("1");
    elements.setAttribute("selected", "false");
    elements.setAttribute("disabled", "false");
    elements = <HTMLInputElement> document.getElementById("2");
    elements.setAttribute("selected", "false");
    elements.setAttribute("disabled", "false");
    elements = <HTMLInputElement> document.getElementById("3");
    elements.setAttribute("selected", "false");
    elements.setAttribute("disabled", "false");
    elements = <HTMLInputElement> document.getElementById("4");
    elements.setAttribute("selected", "false");
    elements.setAttribute("disabled", "false");

  }

}
