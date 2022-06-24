import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private loginService: LoginService, public router: Router, private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((socialUser) => {
      this.loginService.loginOauthGoogle(socialUser.idToken).pipe(
        tap(() => this.router.navigate(['wallets']).then(() => window.location.reload()))
      ).subscribe()
    });
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  login() {
    if (this.form.valid) {
      this.loginService.login({
        username: this.username.value,
        password: this.password.value
      }).pipe(
        tap(() => this.router.navigate(['wallets']).then(() => window.location.reload()))
      ).subscribe()
    }
  }
}
