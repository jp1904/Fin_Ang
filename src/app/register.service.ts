import { Injectable } from '@angular/core';
import {Reg} from './reg';
import { HttpClient, HttpErrorResponse, HttpHeaders } from"@angular/common/http";
import {  Observable, throwError } from'rxjs';
import { catchError } from'rxjs/operators';
import { Logincredentials } from './logincredentials';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServer = "http://localhost:50556/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Reg[]> {
    return this.httpClient.get<Reg[]>(this.apiServer + '/customers')    
  }
  register(Reg): Observable<number> {
    return this.httpClient.post<number>(this.apiServer + '/customers/', JSON.stringify(Reg), this.httpOptions)   
  }

  //  UserLogin(Logincredentials): Observable<string> {​​​​​
  //     return this.httpClient.get<string>(this.apiServer + '/Logincustomer?user_name=' +Logincredentials.user_name+'&?user_password='+Logincredentials.user_password );
  //   }​​​​​ 

   UserLogin(logincredentials): Observable<number> {​​​​​
      return this.httpClient.post<number>(this.apiServer + '/user/',JSON.stringify(logincredentials),this.httpOptions);
       }​​​​​ 
   

    AdminLogin(logincredentials): Observable<number> {​​​​​
      return this.httpClient.post<number>(this.apiServer + '/admin/',JSON.stringify(logincredentials),this.httpOptions);
     }​​​​​ 


}
