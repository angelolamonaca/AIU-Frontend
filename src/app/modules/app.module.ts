import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '../components/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WalletsComponent} from '../components/wallets/wallets.component';
import {AuthComponent} from '../components/auth/auth.component';
import {LoginComponent} from '../components/auth/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AppRoutingModule} from './app-routing.module';
import {JwtModule} from "@auth0/angular-jwt";
import {AuthGuardService} from "../components/auth/auth-guard.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {RegisterComponent} from "../components/auth/register/register.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {CreateWalletComponent} from "../components/wallets/create-wallet/create-wallet.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressBarModule} from "@angular/material/progress-bar";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    WalletsComponent,
    CreateWalletComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule, HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
      },
    }), MatToolbarModule, MatIconModule, MatSidenavModule, MatGridListModule, MatSelectModule, MatProgressBarModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
