import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing-module";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {LogoutHeaderComponent} from "./header/logout-header.component";
import {RegistrationService} from "./_services/registration.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./_services/authentication.service";
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from "./_services/auth-guard.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import {GetUsersService} from "./_services/get-users.service";
import {PermissionService} from "./_services/permission-service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    LogoutHeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    PatientComponent,
    DoctorComponent,
    PharmacistComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegistrationService,
              AuthenticationService,
              AuthGuardService,
              GetUsersService,
              PermissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
