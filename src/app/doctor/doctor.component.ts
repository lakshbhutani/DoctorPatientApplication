import {Component, Input, OnInit} from '@angular/core';
import {GetUsersService} from "../_services/get-users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Patient, RequestObject} from "../_models/users";
import {AuthenticationService} from "../_services/authentication.service";
import {PermissionService} from "../_services/permission-service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() role: number;
  @Input() throughPharmacistComponent:number;
  requestObject: RequestObject = new RequestObject();
  decodedToken: any;
  requestStatusList= [];
  listRendered:boolean  = false;

  patientList: Patient[] = [];

  constructor(private getUsersService: GetUsersService,
              private authService: AuthenticationService,
              private permissionService: PermissionService) {
  }

  ngOnInit() {
    console.log(this.role);
    this.getUsersService.getUsersList(this.role).subscribe(
      (response) => {
        this.getUsersService.patientList = response.data;
        this.patientList = this.getUsersService.patientList;
        console.log(this.patientList);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    this.decodedToken = this.authService.getUserRole();          //getUserRole() will return decoded JWT token
    this.permissionService.requestStatus(this.decodedToken.id, 2).subscribe(
      (response) => {
        // console.log(response.data);
        this.requestStatusList = response.data;
        this.listRendered = true;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  requestPatientAccess(patient: Patient) {
    this.requestObject.requested_for = patient.id;
    this.requestObject.requested_by = this.decodedToken.id;
  }

  confirmPatientAccess() {
    this.permissionService.requestAccess(this.requestObject).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  checkStatus(patient: Patient) {
    // console.log(patient);
    for (let i = 0; i < this.requestStatusList.length; i++) {
      if (this.requestStatusList[i].requested_for.id == patient.id) {
        return true;
      }
      else {
        continue;
      }
    }
  }
  getPatientStatus(patient:Patient){
    for(let i=0;i<this.requestStatusList.length;i++){
      if(patient.id==this.requestStatusList[i].requested_for.id){
        return this.requestStatusList[i].status;
      }
      else {
        continue;
      }
    }
  }
}
