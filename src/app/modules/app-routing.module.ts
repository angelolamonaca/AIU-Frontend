import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../components/auth/login/login.component";
import {HomeComponent} from "../components/home/home.component";
import {
  AuthGuardService as AuthGuard
} from '../components/auth/auth-guard.service';

const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
