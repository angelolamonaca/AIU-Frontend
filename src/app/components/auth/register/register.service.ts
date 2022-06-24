import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    localStorage.clear()
    const body =
      {
        name: user.name,
        username: user.username,
        password: user.password
      }
    return this.http.post<User>('api/auth/register', body);
  }
}
