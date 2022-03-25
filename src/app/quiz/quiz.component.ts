import { Component, OnInit ,ElementRef, Input, ViewChild, AfterContentInit} from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServices } from '../app.service';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  //programming
  @ViewChild('editor', {static: false}) editor!: ElementRef<HTMLElement>;
  @Input() content!: string;
  aceEditor!: ace.Ace.Editor;
  editorBeautify : any;


  htmltest :any;
  //

  constructor( private appServices: AppServices,  private router: Router) { }

  //user data
  user :any;

  //Quiz counter for the quizType on the bottom eg. 2/12
  quizCount : number = 0;

  //disabling and enabling buttons
  questionClickedDisabled = true;
  questionCheckedAnswer = false;

  //after a question is answered
  correctAnswer = false;
  wrongAnswer = false;

  //the question we answer
  questionAnswered : number = 0;

  //the correct answer number
  correctAnswerNumber : number = 0;

  //the data for the questions so it can be loaded and displayed correctly
  currentQuestion : any; // entire question loaded

  currentStageNumber : number = 0; //question to load next
  highestStageNumber : number = 0;


  allowBack = false;
  allowForwards = false;

  loading :boolean = false;


  ngAfterViewInit(): void {

    this.setProgrammingToDefault();
     
  }

  ngOnInit(): void {

    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }

    this.loading = true;

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line

    this.currentStageNumber= this.user.stage;

    // this.getQuestions();
    this.updateUser();

  }

  

  reloadBottomArrows(){
    if(this.currentQuestion.id < this.user.stage){
      this.allowForwards = true;
    }else{
      this.allowForwards = false;
    }

    if(this.currentQuestion.id == 1){
      this.allowBack = false;
    }else{
      this.allowBack = true;
    }
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

    this.setAllAnswersToDefaultSmall();

    //clicked button on
    element.setAttribute("selected", "true");

    console.log(element)
  }

  onNextButtonClicked(){

    //switch to next question
    this.highestStageNumber = this.currentStageNumber + 1;
    this.currentStageNumber = this.currentStageNumber + 1;

    //disabling and enabling buttons
    this.questionClickedDisabled = true;
    this.questionCheckedAnswer = false;

    //after a question is answered
    this.correctAnswer = false;
    this.wrongAnswer = false;

    //the question we answer
    this.questionAnswered = 0;

    //the correct answer number
    this.correctAnswerNumber = 0;

    
    //all buttons off and disable them
    if(this.currentQuestion.type == "Quiz"){
      this.setAllAnswersToDefault();
    }

    this.updateUser();

    

  }

  setProgrammingToDefault(){
    ace.require('ace/ext/language_tools');
    this.editorBeautify = ace.require('ace/ext/beautify');

    setTimeout(() => 
    {
      const editorOptions = this.getEditorOptions(); //get options

      this.aceEditor = ace.edit(this.editor.nativeElement,editorOptions); //initialise the editor
      
       ace.config.set(
          'basePath',
          "https://ace.c9.io/build/src-noconflict/"
       );
  
       
       this.aceEditor.setTheme("ace/theme/monokai"); //set theme
       this.aceEditor.session.setMode("ace/mode/html");  //set language
  
       //enable prints to console
       this.aceEditor.on("change", () => {
          console.log(this.aceEditor.getValue());
       });

       if(this.currentQuestion.question == "tutorial"){
        this.setCodeTutorial();
      }
    
      if(this.currentQuestion.question == "typo"){
        this.setCodeTypography();
      }
  
       this.aceEditor.getSession().setMode("ace/mode/html"); //set language
       this.aceEditor.setShowFoldWidgets(true); // for the scope fold feature
  
       this.aceEditor.renderer.attachToShadowRoot()
       this.intialUpdate();
       this.loading = false;
    },
    300);
  }

  setAllAnswersToDefaultSmall(){
    //all buttons off
    let elements:any = <HTMLInputElement> document.getElementById("1");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("2");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("3");
    elements.setAttribute("selected", "false");
    elements = <HTMLInputElement> document.getElementById("4");
    elements.setAttribute("selected", "false");
  }

  setAllAnswersToDefault(){
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


  getQuestions(){
    this.appServices.getAllQuestions().subscribe( data => {
      console.log(data);
    })
  }

  getQuizTypeCount(){
    this.appServices.getQuestionTypeCount(this.currentQuestion.stageType).subscribe( data => {
      this.quizCount = data;
    })
  }

  getUserByStageTypeNumber(){
    this.appServices.getQuestionByID(this.currentStageNumber).subscribe( data => {
      console.log(data);
      this.currentQuestion = data;
      if(this.currentQuestion.type != "END"){
        this.correctAnswerNumber = data.correctAnswer;

        console.log(this.currentQuestion);
  
        //all buttons off and disable them
        if(this.currentQuestion.type == "Quiz"){
          setTimeout(() => 
          {
            this.setAllAnswersToDefault();
          },
          100);
        }
        if(this.currentQuestion.type == "Programming"){
          this.loading = true;
          this.setProgrammingToDefault()
        }
        
      }
      this.reloadBottomArrows();
      this.getQuizTypeCount();
      
    })
  }

  updateUser(){
    if(this.user.stage < this.highestStageNumber){
      this.appServices.updateUserStage(this.user.id,this.highestStageNumber).subscribe( data => {
        this.appServices.getQuestionByID(this.currentStageNumber).subscribe( data => {
          this.currentQuestion = data;
          this.appServices.updateUserSection(this.user.id,this.currentQuestion.stageType).subscribe( data => {
          this.appServices.updateUserSectionStage(this.user.id,this.currentQuestion.stageNumber).subscribe( data => {

            let loginInfo = {
              email : this.user.email,
              password : this.user.password
            }
        
            this.appServices.login(loginInfo).subscribe( userData => {
              localStorage.setItem('user', JSON.stringify(userData));
        
              this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
              this.getUserByStageTypeNumber();
            })
          })
        })
      })
    })
    }else{
      let loginInfo = {
        email : this.user.email,
        password : this.user.password
      }
  
      this.appServices.login(loginInfo).subscribe( userData => {
        localStorage.setItem('user', JSON.stringify(userData));
  
        this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
        this.getUserByStageTypeNumber();
      })
    }
  }

  arrow(type: any){
    //switch to next question
    if(type == "forward"){
      this.currentStageNumber = this.currentStageNumber + 1;
    }else{
      this.currentStageNumber = this.currentStageNumber - 1;
    }
    

    

    //disabling and enabling buttons
    this.questionClickedDisabled = true;
    this.questionCheckedAnswer = false;

    //after a question is answered
    this.correctAnswer = false;
    this.wrongAnswer = false;

    //the question we answer
    this.questionAnswered = 0;

    //the correct answer number
    this.correctAnswerNumber = 0;

    

    this.updateUser();

    
  }




  ///programming

  getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
    const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
        highlightActiveLine: true,
        minLines: 14,
        maxLines: Infinity,
        
    };

    const extraEditorOptions = {
      enableBasicAutocompletion: true,
      showGutter: true,     // Enabling line numbers for the editor
      useWrapMode: true,
      showPrintMargin: false, // Disabling print margin line from the editor
      highlightGutterLine: false,
      highlightActiveLine: false,
      fadeFoldWidgets: true,
      showLineNumbers: true,
      howGutter: true,
      fontSize: 12,
      wrap: false,

    };
    const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
    return margedOptions;
}

setCodeTutorial(){
  this.aceEditor.session.insert({row: 1, column: 0}, "<h1>Incorrect</h1>");
}

setCodeTypography(){
  this.aceEditor.session.insert({row: 1, column: 0}, "<h1>Cstomr Nam:</h1>\n");
  this.aceEditor.session.insert({row: 1, column: 0}, "<h3>John Hopkins</h3>");
}

refresh(){
  this.setContent("");
  if(this.currentQuestion.question == "tutorial"){
    this.setCodeTutorial();
  }

  if(this.currentQuestion.question == "typo"){
    this.setCodeTypography();
  }
  
}

beautifyContent() {
  if (this.aceEditor && this.editorBeautify) {
     const session = this.aceEditor.getSession();
     this.editorBeautify.beautify(session);
  }
}


getCode() {
  const code = this.aceEditor.getValue();
  console.log(code);
}

setContent(content: string): void {
  if (this.aceEditor) {
      this.aceEditor.setValue(content);
  }
}


intialUpdate(){
  console.log(this.getContent());
  this.htmltest = this.aceEditor.getValue();
  console.log(this.htmltest)
  
}

consoleCode() {
  this.intialUpdate();

  var correctAnswer;

  if(this.currentQuestion.question == "tutorial"){
    correctAnswer = "<h1>Correct</h1>"
  }

  if(this.currentQuestion.question == "typo"){
    correctAnswer = "<h1>Customer Name:</h1>\n<h3>John Hopkins</h3>"
  }
  console.log(correctAnswer)
  if(this.htmltest.includes(correctAnswer)){
    console.log("correct")
    this.questionCheckedAnswer = true;
    this.appServices.showSuccess("Correct Answer")
  }else{
    this.appServices.showError("Incorrect Answer")
  }
}

getContent() {
  if (this.aceEditor) {
      const code = this.aceEditor.getValue();
      return code;
  }
  return
}

OnContentChange(callback: (content: string, delta: ace.Ace.Delta) => void): void {
  this.aceEditor.on('change', (delta) => {
      const content = this.aceEditor.getValue();
      callback(content, delta);
  });
}

}
