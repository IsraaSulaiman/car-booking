import { CurrentUserService } from './../current-user.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private currentService: CurrentUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let { allowedRoles } = route.data;
    let currentUserRole = this.currentService.userRole;
    if (allowedRoles.includes(currentUserRole)) return true;
    return false;
  }
}
