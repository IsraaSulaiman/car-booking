import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  UrlSegment,
  Route,
  CanActivateChild,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url) {
    if (url === '/' && this.authService.isLogged()) {
      this.router.navigate(['/home']);
      return false;
    } else if (url === '/' && !this.authService.isLogged()) {
      return true;
    } else if (this.authService.isLogged()) {
      return true;
    }
    return false;
  }
}
