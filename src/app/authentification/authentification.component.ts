import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isAuth : boolean;
  userName: string;
  password : string;
  message : string;


  constructor(private authentificationService : AuthentificationService,
              private router :Router) { }

  ngOnInit() {
    this.isAuth = this.authentificationService.isAuth;
  }


  logIn(){
    this.message = "";
    const connected = this.authentificationService.logIn(this.userName,this.password);
    if(connected){
      this.isAuth = this.authentificationService.isAuth;
      this.router.navigate(['']);
    }else {
      this.message = "Login ou mot de pass incorrect";
    }
  }

  logOut(){
    this.authentificationService.logOut();
    this.isAuth = this.authentificationService.isAuth;
  }

}
