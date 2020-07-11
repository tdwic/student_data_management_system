import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }


  authenticateUser(userName, passWord){
    if (userName == "a" && passWord == "b"){
      localStorage.setItem('token',"#123456789");
    }else if(userName == "c" && passWord == "d"){
      localStorage.setItem('token',"#987654321");
    }
  }

  loggedInUser(){
    return !! localStorage.getItem('token')
  }

  logOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['home']);
  }


}
