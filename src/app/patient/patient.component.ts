import {Component, Input, OnInit} from '@angular/core';
import {GetUsersService} from "../_services/get-users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Patient, ResponseRequestObject, StatusObject} from "../_models/users";
import {PermissionService} from "../_services/permission-service";
import {AuthenticationService} from "../_services/authentication.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  decodedToken: any;
  patientList: Patient[] = [];
  requestsOnMeList: ResponseRequestObject;
  showRequestsOnMeTable: boolean = false;
  statusObject: StatusObject = new StatusObject();

  constructor(private getUsers: GetUsersService,
              private permissionService: PermissionService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.decodedToken = this.authService.getUserRole();
    console.log(JSON.parse(localStorage.getItem('currentUser')).token);
    console.log(this.decodedToken.id);
    //getting doctors and pharmacist along with their requests.
    this.permissionService.requestStatus(this.decodedToken.id, 1).subscribe(
      (response) => {
        this.requestsOnMeList = response.data;
        console.log(this.requestsOnMeList);
        this.showRequestsOnMeTable = true;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    )

  }

  approveOrDenyProfileAccess(id,status: string) {
    this.statusObject.status = status;
    this.permissionService.approveOrDenyRequestPermission(id,this.statusObject).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
