import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppSettings} from "../_settings/app-settings";
import {Observable} from "rxjs/index";
import {Patient} from "../_models/users";

@Injectable()
export class GetUsersService {
  patientList: Patient[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getUsersList(role: number): Observable<any> {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ' ' + token
      })
    };
    console.log(httpOptions);
    return this.httpClient.get<any>(AppSettings.API_ENDPOINT_GET_USERS + role, httpOptions);
  }

}
