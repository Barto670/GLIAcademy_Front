import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable()
export class AppServices implements OnInit {
  public isLoggedIn = true;

  public serverUrl =   'http://localhost:8081'

  constructor(private http: HttpClient) {

  }

  ngOnInit() {}

  // sampleGet(): Observable<any> {
  //   return this.http.get<any>(this.serverUrl + '/sampleGet/')
  //     .pipe(
  //       catchError(() => {
  //         return null;
  //       })
  //     );
  // }

  // samplePost(payload:any): Observable<any> {
  //   return this.http.post<any>(this.serverUrl + '/samplePost/', payload);
  // }

  // samplePut(payload:any, id: number): Observable<any> {
  //   return this.http.put<any>(this.serverUrl + '/samplePut/'+ `${id}`, payload);
  // }

  // sampleDelete(id: number): Observable<any> {
  //   return this.http.delete<any>(this.serverUrl + '/sampleDelete/'+ `${id}`);
  // }

  // getServerUrl(){
  //   return  this.serverUrl;
  // }




  //APIs start here


  //login API

  login(payload:any): Observable<any> {
    return this.http.post<any>(this.serverUrl + '/login', payload);
  }

  //register API

  addUser(payload:any){
    return this.http.post<any>(this.serverUrl + '/addUser', payload);
  }


  //User APIs

  updateUser(payload:any, id: number): Observable<any> {
    return this.http.put<any>(this.serverUrl + '/updateUser?id=' + `${id}`, payload);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.serverUrl + '/deleteUser/'+ `${id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.serverUrl + '/getAllUsers/');
  }

}
