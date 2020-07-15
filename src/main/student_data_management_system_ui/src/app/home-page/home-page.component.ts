import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from "../commonService/common-service.service";

class Announcement {
  announcementID:string;
  announcementTitle:string;
  announcementContent:string;
  announcementLink:string;
  announcementTarget:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private _commonService:CommonServiceService) { }

  newAnnouncemnt:Announcement[];


  ngOnInit(): void {

    this._commonService.getAllAnnouncements().subscribe(res => {
      this.newAnnouncemnt = res;
    },error => {
      this._commonService.snackBarShow("Error while loading data");
    })

  }

}
