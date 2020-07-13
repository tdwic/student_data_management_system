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
  _apiUrl_:string = "http://localhost:8181";

  constructor(private http: HttpClient) {  }

  //FindAll Methods
  public getAllStudentList():Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/students");
  }

  public getAllTeacherList():Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/teacher");
  }
  //FindAll Methods


  //FindById Methods
  public authenticateUserBuUserID(userID):Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/students/" + userID);
  }

  public authenticateAdminByAdminID(adminID):Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/admin/" + adminID);
  }

  public getStudentMarks(studentID):Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/marks/"+studentID);
  }

  public authenticateTeacherByID(teacherID):Observable<any>{
    return this.http.get<any>(this._apiUrl_+"/teacher/"+teacherID);
  }
  //FindById Methods


  //Post Methods
  public signUpNewUser(Student){
    return this.http.post<any>(this._apiUrl_+"/students" , Student);
  }

  public enterStudentMarks(Marks){
    return this.http.post<any>(this._apiUrl_+"/marks" , Marks);
  }

  public teacherSignUp(Teacher){
    return this.http.post<any>(this._apiUrl_+"/teacher" , Teacher);
  }
  //Post Methods

}
