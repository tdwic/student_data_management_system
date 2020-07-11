import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service';
import {Router} from '@angular/router';
import {CommonServiceService} from '../commonService/common-service.service';

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.scss']
})
export class MainloginComponent implements OnInit {

  tempLocation:string;
  loginStatus:boolean = false;

  constructor(private authService:AuthService,
              private _router:Router,
              private commonService : CommonServiceService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    const userName = event.target.querySelector('#userName').value;
    const passWord = event.target.querySelector('#password').value;

    this.authService.authenticateUser(userName,passWord);

  }

}
