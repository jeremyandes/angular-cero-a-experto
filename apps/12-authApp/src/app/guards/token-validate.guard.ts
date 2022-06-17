import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenValidateGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(): Observable<boolean> | boolean {
    console.log('canActivate');
    return this._tokenValidation();
  }
  canLoad(): Observable<boolean> | boolean {
    console.log('canLoad');
    return this._tokenValidation();
  }

  private _tokenValidation(): Observable<boolean> | boolean {
    return this.authService.tokenValidation()
      .pipe(
        tap(valid => {
          if (!valid) { this.router.navigateByUrl('/auth'); }
        })
      );
  }
}
