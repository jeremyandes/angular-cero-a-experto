import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  public get auth() { return { ...this._auth! }; }

  constructor(private http: HttpClient) { }

  checkToken(): Observable<boolean> {
    return !localStorage.getItem('idUser')
      ? of(false)
      : this.http.get<Auth>(`${this.baseUrl}/users/1`)
        .pipe(
          map(auth => {
            this._auth = auth;
            return true;
          })
        )
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(auth => {
          this._auth = auth;
          localStorage.setItem('idUser', this._auth.id.toString());
        })
      );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('idUser');
  }
}
