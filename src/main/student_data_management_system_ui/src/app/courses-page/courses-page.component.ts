import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';
import {MainloginComponent} from '../mainlogin/mainlogin.component';
import {CommonServiceService} from '../commonService/common-service.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  constructor(private _router: Router,
              private authGuardService:AuthGuardService,
              private commonService : CommonServiceService) {


  }

  ngOnInit(): void {


  }



}
