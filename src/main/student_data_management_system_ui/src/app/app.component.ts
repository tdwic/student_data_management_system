import { Component } from '@angular/core';
import {AuthService} from './auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-free-demo';

  constructor(public _authService: AuthService) {
  }

}
