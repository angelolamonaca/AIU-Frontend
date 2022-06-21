import {Component} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIU-Frontend';
  showFiller = false;
  isLoggedIn = false;

  constructor(private jwtHelper: JwtHelperService, public router: Router) {
    this.isLoggedIn = !this.jwtHelper.isTokenExpired()
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['welcome']).then(() => window.location.reload())

  }
}
