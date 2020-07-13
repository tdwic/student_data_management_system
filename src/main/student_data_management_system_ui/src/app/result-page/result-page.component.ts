import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonServiceService} from "../commonService/common-service.service";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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

  displayedColumns:string[] = ['studentID','firstTermMarks','secondTermMarks','thirdTermMarks','firstTermNote','secondTermNote','thirdTermNote'];
  dataSource = new MatTableDataSource(this.studentResultList);

  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator;

  constructor(private commonService : CommonServiceService) {
    this.getStudentMarks(localStorage.getItem('studentID'));
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
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
      this.studentResultList = res;
      this.dataSource = new MatTableDataSource<StudentResult>(this.studentResultList);
      if (this.studentResultList.length == 0){
        this.visible=true;
      }else {
        this.visible = false;
      }
      console.log(this.StudentMarks);
    })

  }

}
