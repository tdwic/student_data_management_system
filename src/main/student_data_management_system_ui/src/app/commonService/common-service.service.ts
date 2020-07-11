import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _router: Router,
              private authGuardService:AuthService) {

  }


}
