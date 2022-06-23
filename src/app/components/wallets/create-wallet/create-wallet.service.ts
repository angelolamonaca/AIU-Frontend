import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LoginResponse} from "../../../interfaces/login-response";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateWalletService {

  constructor(private http: HttpClient) {
  }

  create(walletName: string, blockchain: string): Observable<LoginResponse> {
    const accessToken = localStorage.getItem("access_token")

    const body = new HttpParams()
      .set('name', walletName)
    return this.http.put<LoginResponse>(`api/wallet/createwallet/${blockchain}`, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${accessToken}`)
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }
}
