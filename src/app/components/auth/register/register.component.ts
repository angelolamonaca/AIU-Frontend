import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private registerService: RegisterService, public router: Router) {
  }

  register() {
    if (this.form.valid) {
      this.registerService.register({
        username: this.username.value,
        password: this.password.value
      }).pipe(
        tap(() => this.router.navigate(['home']).then(() => window.location.reload()))
      ).subscribe()
    }
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

}
