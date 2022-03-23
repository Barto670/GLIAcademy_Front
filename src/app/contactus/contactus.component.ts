import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';


const LANG = 'ace/mode/html';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
}) 
export class ContactUsComponent implements OnInit {

    // @ViewChild('codeEditor') codeEditorElmRef!: ElementRef;
    // codeEditor!: ace.Ace.Editor;

    constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
     ace.config.set("fontSize", "14px");
     ace.config.set(
        'basePath',
        "https://ace.c9.io/build/src-noconflict/"
     );

     const aceEditor = ace.edit(this.editor.nativeElement);
     aceEditor.setTheme("ace/theme/monokai");
     aceEditor.session.setMode("ace/mode/html");
     aceEditor.on("change", () => {
        console.log(aceEditor.getValue());
     });


     aceEditor.getSession().setMode(LANG);
     aceEditor.setShowFoldWidgets(true); // for the scope fold feature

     aceEditor.renderer.attachToShadowRoot()
  }
}