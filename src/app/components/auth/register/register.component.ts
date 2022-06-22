import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private registerService: RegisterService, public router: Router) {
  }

  register() {
    if (this.form.valid) {
      this.registerService.register({
        name: this.name.value,
        username: this.username.value,
        password: this.password.value
      }).pipe(
        tap(() => this.router.navigate(['wallets']).then(() => window.location.reload()))
      ).subscribe()
    }
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

}
