// import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';

// import * as ace from 'ace-builds';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/theme-github';
// import 'ace-builds/src-noconflict/ext-language_tools';
// import 'ace-builds/src-noconflict/ext-beautify';

// @Component({
//   selector: 'app-contactus',
//   templateUrl: './contactus.component.html',
//   styleUrls: ['./contactus.component.scss']
// }) 
// export class ContactUsComponent implements OnInit {

//   @ViewChild('editor') private editor!: ElementRef<HTMLElement>;
//   @Input() content!: string;
//   aceEditor!: ace.Ace.Editor;
//   editorBeautify : any;

//   htmltest :any;
  

//     constructor() { }

//   ngOnInit(): void {
//     ace.require('ace/ext/language_tools');
//     this.editorBeautify = ace.require('ace/ext/beautify');
//   }

  

//   ngAfterViewInit(): void {
    
//     const editorOptions = this.getEditorOptions(); //get options

//     this.aceEditor = ace.edit(this.editor.nativeElement,editorOptions); //initialise the editor
    
//      ace.config.set(
//         'basePath',
//         "https://ace.c9.io/build/src-noconflict/"
//      );

     
//      this.aceEditor.setTheme("ace/theme/monokai"); //set theme
//      this.aceEditor.session.setMode("ace/mode/html");  //set language

//      //enable prints to console
//      this.aceEditor.on("change", () => {
//         console.log(this.aceEditor.getValue());
//      });

//      this.setCodeTutorial();

//      this.aceEditor.getSession().setMode("ace/mode/html"); //set language
//      this.aceEditor.setShowFoldWidgets(true); // for the scope fold feature

//      this.aceEditor.renderer.attachToShadowRoot()
//      this.consoleCode();
     
//   }

//   getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
//     const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
//         highlightActiveLine: true,
//         minLines: 14,
//         maxLines: Infinity,
        
//     };

//     const extraEditorOptions = {
//       enableBasicAutocompletion: true,
//       showGutter: true,     // Enabling line numbers for the editor
//       useWrapMode: true,
//       showPrintMargin: false, // Disabling print margin line from the editor
//       highlightGutterLine: false,
//       highlightActiveLine: false,
//       fadeFoldWidgets: true,
//       showLineNumbers: true,
//       howGutter: true,
//       fontSize: 12,
//       wrap: false,

//     };
//     const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
//     return margedOptions;
// }

// setCodeTutorial(){
//   this.aceEditor.session.insert({row: 1, column: 0}, "<h1>Cstomr Nam:</h1>\n");
//   this.aceEditor.session.insert({row: 1, column: 0}, "<h3>John Hopkins</h3>");
  
// }

// refresh(){
//   this.setContent("");
//   this.setCodeTutorial();
// }

// beautifyContent() {
//   if (this.aceEditor && this.editorBeautify) {
//      const session = this.aceEditor.getSession();
//      this.editorBeautify.beautify(session);
//   }
// }


// getCode() {
//   const code = this.aceEditor.getValue();
//   console.log(code);
// }

// setContent(content: string): void {
//   if (this.aceEditor) {
//       this.aceEditor.setValue(content);
//   }
// }


// consoleCode() {
//   console.log(this.getContent());
//   this.htmltest = this.aceEditor.getValue();
//   console.log(this.htmltest)
//   var correctCustmomerName = "<h1>Customer Name:</h1>\n<h3>John Hopkins</h3>"
//   console.log(correctCustmomerName)
//   if(this.htmltest.includes(correctCustmomerName)){
//     console.log("correct")
//   }
// }

// getContent() {
//   if (this.aceEditor) {
//       const code = this.aceEditor.getValue();
//       return code;
//   }
//   return
// }

// OnContentChange(callback: (content: string, delta: ace.Ace.Delta) => void): void {
//   this.aceEditor.on('change', (delta) => {
//       const content = this.aceEditor.getValue();
//       callback(content, delta);
//   });
// }
// }