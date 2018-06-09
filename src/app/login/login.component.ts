import { Component, OnInit } from '@angular/core';
import {Login} from "../_models/users";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class  LoginComponent implements OnInit {
  login:Login = new Login();
  loading:boolean = false;
  error:string ='';


  constructor(private authenticationService:AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.authenticationService.logout();
  }
  submitLogin(){
    this.loading = true;
    this.authenticationService.login(this.login).subscribe(
      (result) => {
        // console.log(result);
        if(result)
          this.router.navigate(['/home']);
        else
          this.loading = false;
          this.error='Username or password is incorrect.'
      });
  }
}
