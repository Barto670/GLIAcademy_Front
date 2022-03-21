import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { AppServices } from 'src/app/app.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  chat = false;

  


  constructor(public appServices: AppServices) { }



  ngOnInit(): void {
    this.updateLatestMessage();
    interval(2000).subscribe((func => {
      this.updateMessage();
    }))
  }

  updateMessage(){
    this.appServices.getChatCount().subscribe( data => {
      this.appServices.latestMessage = data;
      this.appServices.messageNotification = this.appServices.latestMessage - this.appServices.lastMessageViewed;
    });
  }

  updateLatestMessage(){
    this.appServices.getChatCount().subscribe( data => {
      console.log(data)
      this.appServices.lastMessageViewed = data;
      this.appServices.latestMessage = data;
      this.appServices.messageNotification = 0;
    });
  }

  chatPopup(){
    this.chat = true;
    this.updateLatestMessage();
  }

}
