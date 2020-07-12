import { Component } from '@angular/core';
import {AuthService} from './auth-service';
import {CommonServiceService} from "./commonService/common-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-free-demo';

  constructor(public _authService: AuthService,
              private commonService : CommonServiceService) {
  }

  clicked(routeName: string) {
    this.commonService.tempLocation.push(routeName);
  }
}
