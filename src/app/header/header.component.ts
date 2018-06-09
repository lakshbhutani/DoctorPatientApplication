import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser:string;
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.currentUser =  this.authService.getUsername();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
