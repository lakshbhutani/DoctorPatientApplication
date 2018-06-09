import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: number;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.role = this.authService.getUserRole().role;
  }

}
