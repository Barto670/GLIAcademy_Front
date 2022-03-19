import { ThrowStmt } from '@angular/compiler';
import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppServices } from 'src/app/app.service';
import { NavbarComponent } from '../navbar.component';



@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chat implements OnInit {

  user : any;
  

  matTableDataSource = new MatTableDataSource; 

  public matTableColumnDisplay: string[] = ['message','messageSent']; 

  public form: FormGroup = new FormGroup({ 

    message: new FormControl('', Validators.required), 

 }); 

  @ViewChildren(MatPaginator) matTableGenericPaginator!: QueryList<MatPaginator>;

  @ViewChildren(MatSort) matTableSort!: QueryList<MatSort>;


  constructor(private router: Router , private appServices: AppServices, private navbar: NavbarComponent) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line


    this.matTableDataSource.data = []; 

    this.getChats();
  }

  ngAfterViewInit() { 
      
    this.matTableDataSource.paginator = this.matTableGenericPaginator.toArray()[0]; 
    this.matTableDataSource.sort = this.matTableSort.toArray()[0];  
 
  } 


  submit(){

  }

  close(){
    this.navbar.chat = false
  }

  addChat(){

    var tempMessage = {
      message: this.form.value.message,
      messageSend : new Date(),
      senderID : this.user.id,
      senderName : this.user.firstName,
      senderSurname : this.user.lastName,
      senderImage : this.user.imageURL
    }

    this.appServices.addChat(tempMessage).subscribe( data => {
      this.getChats();
    })

  }

  getChats(){
    this.appServices.getAllChats().subscribe( data => {
      this.matTableDataSource = data;
    })
  }
  

}
