import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private jwtHelper: JwtHelperService) {
  }

  canActivate(): boolean {
    if (this.jwtHelper.isTokenExpired()) {
      this.router.navigate(['welcome']);
      return false;
    }
    return true;
  }
}
