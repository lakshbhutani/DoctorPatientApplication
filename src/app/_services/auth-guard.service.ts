import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthenticationService,
                private router: Router){}

    canActivate(){
      // loggedIn so return true
      if(this.authService.token) return true;
      // redirect to login page if not logged
      this.router.navigate(['/login']);
      return false;
    }
}
