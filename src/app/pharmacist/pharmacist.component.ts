import {Component, Input, OnInit} from '@angular/core';
import {GetUsersService} from "../_services/get-users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Patient} from "../_models/users";

@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})
export class PharmacistComponent implements OnInit {
  @Input() role: number;

  constructor() {
  }

  ngOnInit() {
  }

}
