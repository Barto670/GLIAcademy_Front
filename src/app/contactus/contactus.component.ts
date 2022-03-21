import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {

  user :any;

  constructor(private router: Router ) { }

  ngOnInit(): void {

    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }

}
