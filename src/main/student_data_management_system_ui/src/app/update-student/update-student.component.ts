import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {CommonServiceService} from "../commonService/common-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  studentDetailsForm:FormGroup;

  token:string;

  test:string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,
              public dialogRef : MatDialogRef<UpdateStudentComponent>,
              private _commonService : CommonServiceService,
              private _snackBar:MatSnackBar) {
    this.studentDetails = data.studentData;
  }

  ngOnInit(): void {

    this.studentDetailsForm = new FormGroup({
      firstName:new FormControl(this.studentDetails.studentName.split(" ")[0]),
      lastName:new FormControl(this.studentDetails.studentName.split(" ")[1]),
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

    let StudentUpdate = {
      studentTokenID:'',
      studentID:'',
      studentName:'',
      studentAddress: '',
      studentPassword: '',
      studentD0B: '',
      studentGender: '',
      studentPhone: '',
      studentParent: ''
    }

    StudentUpdate.studentTokenID = this.studentDetails.studentTokenID;
    StudentUpdate.studentID = this.studentDetailsForm.value['studentID'];
    StudentUpdate.studentName = this.studentDetailsForm.value['firstName'] + " " + this.studentDetailsForm.value['lastName'] ;
    StudentUpdate.studentAddress = this.studentDetailsForm.value['studentAddress'];
    StudentUpdate.studentPassword = this.studentDetailsForm.value['studentPassword'];
    StudentUpdate.studentD0B = this.studentDetailsForm.value['studentD0B'];
    StudentUpdate.studentGender = this.studentDetailsForm.value['studentGender'];
    StudentUpdate.studentPhone = this.studentDetailsForm.value['studentPhone'];
    StudentUpdate.studentParent = this.studentDetailsForm.value['studentParent'];

    this._commonService.signUpNewUser(StudentUpdate).subscribe(res => {
      this._snackBar.open('Data Updated','', {
        duration: 3000,
        panelClass:['testClass'],
        horizontalPosition:'end',
        verticalPosition:'top'
      });
      this.dialogClose();
    }, error => {
      alert("Db ERROR")
    })

  }

  dialogClose(){
    this.dialogRef.close();
  }

}
