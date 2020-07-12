import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from "../commonService/common-service.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  signUpForm:FormGroup;

  constructor(private _commonService : CommonServiceService) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      studentID:new FormControl(),
      studentAddress:new FormControl(),
      studentPassword:new FormControl(),
      studentPasswordConfirm:new FormControl(),
      studentPhone:new FormControl(),
      studentGender:new FormControl(),
      studentD0B:new FormControl(),
      studentParent:new FormControl(),

    });

  }

  signUpUser() {

      let Student = {
        studentID:'',
        studentName:'',
        studentAddress:'',
        studentPassword:'',
        studentD0B:'',
        studentGender:'',
        studentPhone:'',
        studentParent:''
      }

      Student.studentName = this.signUpForm.value['firstName'] + " " + this.signUpForm.value['lastName'];
      Student.studentID = this.signUpForm.value['studentID'];
      Student.studentAddress = this.signUpForm.value['studentAddress'];

      if ( this.signUpForm.value['studentPassword'] == this.signUpForm.value['studentPasswordConfirm']){
        Student.studentPassword = this.signUpForm.value['studentPassword'];
      }

      Student.studentD0B = this.signUpForm.value['studentD0B'];
      Student.studentGender = this.signUpForm.value['studentGender'];
      Student.studentPhone = this.signUpForm.value['studentPhone'];
      Student.studentParent = this.signUpForm.value['studentParent'];

      console.log(Student);

      this._commonService.signUpNewUser(Student).subscribe(res =>{
        alert("SignUp Success!");
      }, error => {
        alert("SignUP Failed " + error.status);
      })
  }
}
