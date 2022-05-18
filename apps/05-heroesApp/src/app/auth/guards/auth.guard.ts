import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // if (this.authService.auth.id) { return true; }

    // console.log('canActivate', false);
    // console.log(route);
    // console.log(state);

    // return false;

    return this.authService.checkToken()
      .pipe(
        tap(isAuthenticated => !isAuthenticated
          ? this.router.navigate(['/auth'])
          : console.log('Login success'))
      );

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    // if (this.authService.auth.id) { return true; }

    // console.log('canLoad', false);
    // console.log(route);
    // console.log(segments);

    // return false;

    return this.authService.checkToken().pipe(
      tap(isAuthenticated => !isAuthenticated
        ? this.router.navigate(['/auth'])
        : console.log('Login success'))
    );

  }
}
