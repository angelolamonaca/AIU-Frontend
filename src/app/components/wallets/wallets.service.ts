import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wallet} from "../../interfaces/wallet";

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Wallet[]> {
    const accessToken = localStorage.getItem("access_token")

    return this.http.get<Wallet[]>('api/wallet',
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${accessToken}`)
      })
  }
}
