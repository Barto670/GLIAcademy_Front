import { ThrowStmt } from '@angular/compiler';
import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { AppServices } from 'src/app/app.service';
import { NavbarComponent } from '../navbar.component';



@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class chat implements OnInit {

  user : any;
  messageLength : any;
  

  matTableDataSource = new MatTableDataSource; 

  public matTableColumnDisplay: string[] = ['message','messageSent']; 

  public form: FormGroup = new FormGroup({ 

    message: new FormControl('', Validators.required), 

  }); 

  @ViewChildren(MatPaginator) matTableGenericPaginator!: QueryList<MatPaginator>;

  @ViewChildren(MatSort) matTableSort!: QueryList<MatSort>;


  constructor(private router: Router , private appServices: AppServices, private navbar: NavbarComponent) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      this.router.navigate(["/login"]);
    }

    this.user = JSON.parse(localStorage.getItem('user')!); // The non-null assertion operator at the end of the line


    this.matTableDataSource.data = []; 

    this.getChats();


    

    setTimeout(() => 
    {
      this.updateTableScroll();
    },
    500);

    
    interval(5000).subscribe((func => {
      this.getChats();
      if(this.messageLength != this.matTableDataSource.data.length){
        this.updateTableScroll();
      }
    }))

  }

  ngAfterViewInit() { 
      
    this.matTableDataSource.paginator = this.matTableGenericPaginator.toArray()[0]; 
    this.matTableDataSource.sort = this.matTableSort.toArray()[0];  
 
  } 

  close(){
    this.navbar.chat = false
  }

  sendChat(){

    var tempMessage = {
      message: this.form.value.message,
      messageSent : new Date(),
      senderID : this.user.id,
      senderName : this.user.firstName,
      senderSurname : this.user.secondName,
      senderImage : this.user.imageURL,
      senderUsername : this.user.username
    }

    this.appServices.addChat(tempMessage).subscribe( data => {
      this.getChats();
      this.form.reset();
    })

  }

  getChats(){
    this.appServices.getAllChats().subscribe( data => {
      this.matTableDataSource.data = data;
      console.log(data)
    })
  }

  updateTableScroll(){
    console.log("SCROLLUPDATE");
    var objDiv = document.getElementById("scroll")!;
    console.log(objDiv)

    console.log(this.matTableDataSource.data)

    this.messageLength = this.matTableDataSource.data.length;
    objDiv.scrollTop = objDiv.scrollHeight;

  }

  

}
