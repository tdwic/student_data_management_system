import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CommonServiceService} from "../commonService/common-service.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {UpdateStudentComponent} from "../update-student/update-student.component";
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
  selector: 'app-manage-student-details',
  templateUrl: './manage-student-details.component.html',
  styleUrls: ['./manage-student-details.component.scss']
})
export class ManageStudentDetailsComponent implements OnInit {

  studentList:Student[];
  student:Student;

  displayedColumns:string[] = [
        'studentID',
        'studentName',
        'studentAddress',
        'studentPassword',
        'studentD0B',
        'studentGender',
        'studentPhone',
        'studentParent',
        'action'
  ];
  dataSource = new MatTableDataSource(this.studentList);

  @ViewChild(MatPaginator,{static:true})paginator:MatPaginator;
  private data: any;

  constructor(private commonService : CommonServiceService,
              public dialog:MatDialog,
              private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.populateTable();
  }

  updateStudentDetails(element){
    this.student = element
    this.dialog.open(UpdateStudentComponent,{
      width: '75%',
      data:{
        studentData:this.student
      },
    }).afterClosed().subscribe( res=>{
      console.log("Dialog result "+ res)
      this.populateTable();
    });
  }

  removeStudentDetails(element){
    this.student = element
  }

  populateTable(){
    this.commonService.getAllStudentList().subscribe( res=>{
      this.studentList = res;
      this.dataSource = new MatTableDataSource(this.studentList);
    });
  }

}
