import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (state.url === '/' && this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
      return false;
    } else if (state.url === '/' && !this.authService.isLoggedIn()) {
      return true;
    } else if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
