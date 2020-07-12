import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) {  }

  public authenticateUserBuUserID(userID):Observable<any>{
    return this.http.get<any>("http://localhost:8181/students/" + userID);
  }

}
