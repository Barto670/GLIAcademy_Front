import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

const LANG = 'ace/mode/html';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
}) 
export class ContactUsComponent implements OnInit {

  @ViewChild('editor') private editor!: ElementRef<HTMLElement>;
  aceEditor!: ace.Ace.Editor;

    constructor() { }

  ngOnInit(): void {
    ace.require('ace/ext/language_tools');
  }

  

  ngAfterViewInit(): void {
    this.aceEditor = ace.edit(this.editor.nativeElement);
     ace.config.set("fontSize", "14px");
     ace.config.set(
        'basePath',
        "https://ace.c9.io/build/src-noconflict/"
     );

     
     this.aceEditor.setTheme("ace/theme/monokai");
     this.aceEditor.session.setMode("ace/mode/html");
     this.aceEditor.on("change", () => {
        console.log(this.aceEditor.getValue());
     });


     this.aceEditor.getSession().setMode(LANG);
     this.aceEditor.setShowFoldWidgets(true); // for the scope fold feature

     this.aceEditor.renderer.attachToShadowRoot()
  }
}