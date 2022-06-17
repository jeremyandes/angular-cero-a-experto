import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, User } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  constructor(
    private http: HttpClient,
  ) { }

  get user(): User { return { ...this._user }; }
  set user(user: User) { this._user = user; }

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            this.user = {
              name: resp.name!,
              uid: resp.uid!,
            }
          }
        }),
        map(isValid => isValid.ok),
        catchError(() => of(false)),
      );
  }

}
