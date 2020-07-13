import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  tempLocation:string[] = [];


  constructor(private http: HttpClient) {  }

  public authenticateUserBuUserID(userID):Observable<any>{
    return this.http.get<any>("http://localhost:8181/students/" + userID);
  }

  public getAllStudentList():Observable<any>{
    return this.http.get<any>("http://localhost:8181/students");
  }

  public authenticateAdminByAdminID(adminID):Observable<any>{
    return this.http.get<any>("http://localhost:8181/admin/" + adminID);
  }

  public getStudentMarks(studentID):Observable<any>{
    return this.http.get<any>("http://localhost:8181/marks/"+studentID);
  }



  public signUpNewUser(Student){
    return this.http.post<any>("http://localhost:8181/students" , Student);
  }

  public enterStudentMarks(Marks){
    return this.http.post<any>("http://localhost:8181/marks" , Marks);
  }

}
