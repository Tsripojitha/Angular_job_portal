import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  constructor(public http:HttpClient) { }
  private addNewuser = "http://localhost:5158/Employee/AddEmployee";
addNewUser(user: {username: any,password: any,phonenumber:any,experience:any}): Observable<Object> {
    return this.http.post(`${this.addNewuser}`, user);
  }
}
