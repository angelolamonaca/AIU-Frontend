import {Component} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {Platform} from "@angular/cdk/platform";
import {MatDialog} from "@angular/material/dialog";
import {CreateWalletComponent} from "./wallets/create-wallet/create-wallet.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIU-Frontend';
  showFiller = false;
  isLoggedIn = false;
  isMobile = false;

  constructor(private jwtHelper: JwtHelperService, public router: Router, public platform: Platform, public dialog: MatDialog) {
    this.isLoggedIn = !this.jwtHelper.isTokenExpired()
    this.isMobile = platform.ANDROID || platform.IOS
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['welcome']).then(() => window.location.reload())
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateWalletComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
