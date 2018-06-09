import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AppSettings} from "../_settings/app-settings";
import {RequestObject} from "../_models/users";

@Injectable()
export class PermissionService {
  constructor(private httpClient: HttpClient) {
  }

  requestAccess(requestObject:RequestObject): Observable<any> {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ' ' + token
      })
    };
    return this.httpClient.post(AppSettings.API_ENDPOINT_REQUEST_ACCESS, requestObject, httpOptions);
  }

  requestStatus(id,type): Observable<any>{
    let token = JSON.parse(localStorage.getItem('currentUser')).token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ' ' + token
      })
    };
    console.log(httpOptions);
    return this.httpClient.get<any>(AppSettings.API_ENDPOINT_GET_REQUEST_STATUS +'/' +id +'/'+type, httpOptions);

  }
  approveOrDenyRequestPermission(id,body):Observable<any>{
    let token = JSON.parse(localStorage.getItem('currentUser')).token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + ' ' + token
      })
    };
    console.log(httpOptions);
    return this.httpClient.put(AppSettings.API_ENDPOINT_APPROVE_OR_DENY_PERMISSION_REQUEST+'/'+id,body,httpOptions);
  }
}
