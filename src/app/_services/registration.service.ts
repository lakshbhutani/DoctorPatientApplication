import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Register} from "../_models/register";
import {AppSettings} from "../_settings/app-settings";

@Injectable()
export class RegistrationService {
  constructor(private httpClient: HttpClient) {
  }

  register(register: Register): Observable<any> {
    return this.httpClient.post(AppSettings.API_ENDPOINT_USER_CREATE, register);
  }
}
