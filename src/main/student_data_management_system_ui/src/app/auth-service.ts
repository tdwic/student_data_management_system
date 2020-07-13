import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonServiceService} from "./commonService/common-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUserRoleType:string = 'none';

  adminRoleEncryptCodeNumber:string = '<<#$12"3"45$#-12%123>>';
  studentRoleEncryptCodeNumber:string = '<<FF#$123ER32??@#DDW>>';
  teacherRoleEncryptCodeNumber:string = '<<3@32$23A@#45GR12SS>>';

  constructor(private _router: Router,
              private _commonService: CommonServiceService
              ) { }


  authenticateUser(userName, passWord, userType){

    if (userType == '_STUDENT_'){

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
          this.loggedUserRoleType = this.studentRoleEncryptCodeNumber;
          localStorage.setItem('token',Student.studentTokenID.toString());
          localStorage.setItem('studentID',Student.studentID.toString());
          localStorage.setItem('role',this.loggedUserRoleType);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          alert("Wrong Credentials");
        }
      })

    }else if (userType == '_ADMIN_'){

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
          this.loggedUserRoleType = this.adminRoleEncryptCodeNumber;
          localStorage.setItem('token',Admin.adminTokenID.toString());
          localStorage.setItem('role',this.loggedUserRoleType);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          alert("Wrong Credentials");
        }

      },error => {
        alert("DB error");
      });

    }else if (userType == '_TEACHER_'){

      let Teacher = {
        teacherTokenID:'',
        teacherID:'',
        teacherName:'',
        teacherPassword:'',
        teacherGender:'',
        teacherEmail:'',
        teacherContactNO:''
      };

      this._commonService.authenticateTeacherByID(userName).subscribe( res => {
        Teacher = res;
        console.log(Teacher);

        if (userName == Teacher.teacherID && passWord == Teacher.teacherPassword){
          alert("Login Success ! Welcome Admin");
          this.loggedUserRoleType = this.teacherRoleEncryptCodeNumber;
          localStorage.setItem('token',Teacher.teacherTokenID);
          localStorage.setItem('role',this.loggedUserRoleType);
          if (this._commonService.tempLocation.length == 0){
            this._router.navigate(['home']);
          }else {
            this._router.navigate([this._commonService.tempLocation.pop()]);
          }
        }else {
          alert("Wrong Credentials");
        }

      })

    }
  }


  //Nav LInk Hiding
  loggedInUser(){
    return !! localStorage.getItem('token')
  }

  adminLogged(){
    return !! (localStorage.getItem('role') == this.adminRoleEncryptCodeNumber);
  }

  teacherLogged(){
    return !! (localStorage.getItem('role') == this.teacherRoleEncryptCodeNumber);
  }
  //Nav LInk Hiding

  logOutUser(){

    this.localStorageClearing();

    if (this._commonService.tempLocation.length != 0){
      this._commonService.tempLocation = [];
    }

    this._router.navigate(['home']);
  }

  localStorageClearing(){

    if(localStorage.getItem('token') != null){
      localStorage.removeItem('token');
    }
    if(localStorage.getItem('studentID') != null){
      localStorage.removeItem('studentID');
    }
    if (localStorage.getItem('role') != null){
      localStorage.removeItem('role');
    }

  }


}
