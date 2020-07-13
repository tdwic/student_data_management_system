import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

class Student {
  studentTokenID:string = '';
  studentID:string = '';
  studentName:string ='';
  studentAddress:string ='';
  studentPassword:string ='';
  studentD0B:string ='';
  studentGender:string ='';
  studentPhone:string ='';
  studentParent:string ='';
}

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  studentDetails:Student;
  signUpForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) {
    this.studentDetails = data.studentData;
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      studentID:new FormControl(this.studentDetails.studentID),
      studentAddress:new FormControl(this.studentDetails.studentAddress),
      studentPassword:new FormControl(this.studentDetails.studentPassword),
      studentPasswordConfirm:new FormControl(this.studentDetails.studentPassword),
      studentPhone:new FormControl(this.studentDetails.studentPhone),
      studentGender:new FormControl(this.studentDetails.studentGender),
      studentD0B:new FormControl(this.studentDetails.studentD0B),
      studentParent:new FormControl(this.studentDetails.studentParent),

    });
  }
  signUpUser(){

  }

}
