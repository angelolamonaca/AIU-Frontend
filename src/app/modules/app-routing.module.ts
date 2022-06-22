import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../components/auth/login/login.component";
import {WalletsComponent} from "../components/wallets/wallets.component";
import {AuthGuardService as AuthGuard} from '../components/auth/auth-guard.service';
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {RegisterComponent} from "../components/auth/register/register.component";

const routes: Routes = [
  {
    path: '', component: WalletsComponent,
    canActivate: [AuthGuard]
  },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
  {
    path: 'wallets', component: WalletsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
