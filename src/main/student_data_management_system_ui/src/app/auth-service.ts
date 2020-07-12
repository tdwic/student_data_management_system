import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonServiceService} from "./commonService/common-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router,
              private _commonService: CommonServiceService
              ) { }


  authenticateUser(userName, passWord){

    let Student = {
      studentTokenID:'',
      studentID:'',
      studentName:'',
      studentAddress:'',
      studentPassword:'',
      studentD0B:'',
      studentGender:'',
      studentPhone:'',
      studentParent:''
    };

    this._commonService.authenticateUserBuUserID(userName).subscribe(res=>{
      Student = res;
      console.log(Student);

      if (userName == Student.studentID && passWord == Student.studentPassword){
        alert("Login Success ! Welcome");
        localStorage.setItem('token',Student.studentTokenID.toString());
      }else {
        alert("Wrong Credentials");
      }
    })


  }

  athenticateAdmin(userName, passWord){

    let Admin = {
      adminTokenID:'',
      adminID:'',
      password:'',
    };

    this._commonService.authenticateAdminByAdminID(userName).subscribe(res=>{
      Admin = res;
      console.log(Admin);

      if (userName == Admin.adminID && passWord == Admin.password){
        alert("Login Success ! Welcome Admin");
        localStorage.setItem('token',Admin.adminTokenID.toString());
      }else {
        alert("Wrong Credentials");
      }

    },error => {
      alert("DB error");
    });

  }


  loggedInUser(){
    return !! localStorage.getItem('token')
  }

  logOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['home']);
  }


}
