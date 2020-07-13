import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from "../commonService/common-service.service";

class StudentResult {
  recordID: string;
  studentID: string;
  firstTermMarks: string;
  secondTermMarks: string;
  thirdTermMarks: string;
  firstTermNote: string;
  secondTermNote: string;
  thirdTermNote: string;
}

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  visible:boolean=false;
  studentResultList:StudentResult[];

  constructor(private commonService : CommonServiceService) {
    this.getStudentMarks(localStorage.getItem('studentID'));
  }

  ngOnInit(): void {
    this.getStudentMarks(localStorage.getItem('studentID'));
  }

   StudentMarks = {
    recordID: '',
    studentID: '',
    firstTermMarks: '',
    secondTermMarks: '',
    thirdTermMarks: '',
    firstTermNote: '',
    secondTermNote: '',
    thirdTermNote: ''
  };

  getStudentMarks(studentID:string){

    this.commonService.getStudentMarks(studentID).subscribe( res => {
      this.StudentMarks = res;
      this.studentResultList = res;
      if (this.StudentMarks != null){
        this.visible=true;
      }else {
        this.visible = false;
      }
      console.log(this.StudentMarks);
    })

  }

}
