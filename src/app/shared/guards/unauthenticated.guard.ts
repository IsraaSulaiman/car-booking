import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  CanLoad,
  UrlSegment,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkNotLogin();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.checkNotLogin();
  }

  checkNotLogin() {
    if (this.authService.isLogged()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
