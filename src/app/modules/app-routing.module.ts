import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../components/auth/login/login.component";
import {HomeComponent} from "../components/home/home.component";
import {AuthGuardService as AuthGuard} from '../components/auth/auth-guard.service';
import {WelcomeComponent} from "../components/welcome/welcome.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
