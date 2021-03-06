import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../../../interfaces/user";
import {LoginResponse} from "../../../interfaces/login-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<LoginResponse> {
    localStorage.clear()
    const body = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);
    return this.http.post<LoginResponse>('api/auth/login', body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }).pipe(
      tap((res: LoginResponse) => localStorage.setItem("access_token", res.access_token)),
      tap((res: LoginResponse) => localStorage.setItem("refresh_token", res.refresh_token)),
    );
  }

  loginOauthGoogle(idToken: string) {
    localStorage.clear()
    const body = {
      idToken
    }
    return this.http.post<LoginResponse>('api/auth/login/oauth/google', body).pipe(
      tap((res: LoginResponse) => localStorage.setItem("access_token", res.access_token)),
      tap((res: LoginResponse) => localStorage.setItem("refresh_token", res.refresh_token)),
    );
  }
}
