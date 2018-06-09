import { Component, OnInit } from '@angular/core';
import {Register} from "../_models/register";
import {RegistrationService} from "../_services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register = new Register();
  roleValues = [
    {
      id: 1,
      name: "Patient"
    },
    {
      id: 2,
      name: "Doctor"
    },
    {
      id: 3,
      name: "Pharmacist"
    }
  ];

  loading = false;

  constructor(private registrationService: RegistrationService,
              private router: Router) { }

  ngOnInit() {
    this.register.role=0; //For setting the default value of dropdown
  }
  onSubmit(form) {
    this.loading = true;
    if (form.valid) {
      console.log(form);
      this.register.role =  Number(this.register.role);
      console.log(this.register);
      console.log(JSON.stringify(this.register));
      this.registrationService.register(this.register)
        .subscribe(
          response => {
            this.router.navigate(['/login']);
          }
        );
    }
  }
}
