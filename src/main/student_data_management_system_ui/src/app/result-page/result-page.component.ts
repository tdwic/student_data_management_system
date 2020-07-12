import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from "../commonService/common-service.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  visible:boolean=false;

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
      if (this.StudentMarks != null){
        this.visible=true;
      }else {
        this.visible = false;
      }
      console.log(this.StudentMarks);
    })

  }

}
