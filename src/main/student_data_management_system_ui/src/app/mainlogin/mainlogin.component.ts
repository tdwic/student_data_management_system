import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service';
import {Router} from '@angular/router';
import {CommonServiceService} from '../commonService/common-service.service';

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.scss']
})
export class MainloginComponent implements OnInit {

  tempLocation:string[];
  loginStatus:boolean = false;

  userType:string;

  userRoleAnnotationForAdmin:string = "AD";
  userRoleAnnotationForStudent:string = "ST";
  userRoleAnnotationForTeacher:string = "TE";

  constructor(private authService:AuthService,
              private _router:Router,
              private commonService : CommonServiceService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    const userName = event.target.querySelector('#userName').value;
    const passWord = event.target.querySelector('#password').value;

    this.userType = userName.substring(0,2);

    if (this.userType == this.userRoleAnnotationForStudent){
      // alert("Login User Role "+this.userType+" Student");
      this.authService.authenticateUser(userName,passWord, "_STUDENT_");
    }else if (this.userType == this.userRoleAnnotationForAdmin){
      // alert("Login User Role "+this.userType+" Admin");
      this.authService.authenticateUser(userName,passWord, "_ADMIN_");
    }else if (this.userType == this.userRoleAnnotationForTeacher){
      // alert("Login User Role "+this.userType+" Teacher");
      this.authService.authenticateUser(userName,passWord, "_TEACHER_");
    }else {

    }



  }

}
