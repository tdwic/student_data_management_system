import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonServiceService} from "../commonService/common-service.service";
import validate = WebAssembly.validate;

class Student {
  studentID:string;
  studentName:string;
  studentAddress:string;
  studentPassword:string;
  studentD0B:string;
  studentGender:string;
  studentPhone:string;
  studentParent:string;
}

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {

  marksForm:FormGroup;

  studentList:Student[];


  constructor(private _commonService : CommonServiceService) { }

  ngOnInit(): void {

    this.marksForm = new FormGroup({
      studentID:new FormControl(),
      studentFirstTermMark:new FormControl(),
      studentSecondTermMark:new FormControl(),
      studentThirdTermMark:new FormControl(),
      studentFirstTermNote:new FormControl(),
      studentSecondTermNote:new FormControl(),
      studentThirdTermNote:new FormControl(),
    })

    this._commonService.getAllStudentList().subscribe(res=>{
      this.studentList = res;
    })

  }

  enterMarks(){

    let StudentMarks = {
      studentID:'',
      firstTermMarks:'',
      secondTermMarks:'',
      thirdTermMarks:'',
      firstTermNote:'',
      secondTermNote:'',
      thirdTermNote:''
    };

    StudentMarks.studentID = this.marksForm.value['studentID'];
    StudentMarks.firstTermMarks = this.marksForm.value['studentFirstTermMark'];
    StudentMarks.secondTermMarks = this.marksForm.value['studentSecondTermMark'];
    StudentMarks.thirdTermMarks = this.marksForm.value['studentThirdTermMark'];
    StudentMarks.firstTermNote = this.marksForm.value['studentFirstTermNote'];
    StudentMarks.secondTermNote = this.marksForm.value['studentSecondTermNote'];
    StudentMarks.thirdTermNote = this.marksForm.value['studentThirdTermNote'];

    console.log(StudentMarks);

    this._commonService.enterStudentMarks(StudentMarks).subscribe(res=>{
      alert("Marks Added Successfully!");
    }, error => {
      alert("DB error");
    })

  }

}
