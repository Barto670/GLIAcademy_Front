import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutLogin',
  templateUrl: './aboutLogin.component.html',
  styleUrls: ['./aboutLogin.component.scss']
})
export class AboutLoginComponent implements OnInit {
  user :any;
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line
  }

  back(){
    this.router.navigate(['/login'])
  }

}
