import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedIn:boolean;
  constructor(private autheService:AuthenticationService){}

  isLoggedIn(){
    if(this.autheService.token){
      this.loggedIn = true;
    }
    else{
      this.loggedIn = false;
    }
    return this.loggedIn;
  }
}
