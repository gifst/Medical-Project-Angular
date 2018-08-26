import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isAuth : boolean;
  constructor() { }

  logIn(login:string,password:string):boolean{

    if(login=="Admin" && password =="Admin")
    {
      this.isAuth = true;
      return true;
    }
    return false;
  }

  logOut(){
    this.isAuth = false;
  }

}
