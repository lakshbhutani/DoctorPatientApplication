import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from "../_settings/app-settings";
import {map} from "rxjs/internal/operators";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private httpClient: HttpClient) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(credentials): Observable<any> {
    return this.httpClient.post(AppSettings.API_ENDPOINT_USER_LOGIN, credentials)
      .pipe(map((response: any) => {
        console.log(response);
        // login successfull if there is a jwt token in response
        let token = response.data.token;
        if (token) {
          // set token property
          this.token = token;
          //store username and jwt token in local storage to keep user logged in between different page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username: credentials.user_name, token: token}));
          return true;
        }
        return false;
      }));
  }

  getUsername(): string {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  getUserRole() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    return decodedToken;
  }
}

