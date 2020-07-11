import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuardService} from '../auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _router: Router,
              private authGuardService:AuthGuardService) {

  }


}
