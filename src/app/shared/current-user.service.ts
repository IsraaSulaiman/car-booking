import { UserService } from './../users/user.service';
import { AuthService } from '../auth/auth.service';
import { CurrentUser } from '../auth/auth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private _currentUser: CurrentUser;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  getUser() {
    let id = this.authService.userId;
    if (!id) return;
    this.userService.getById(id).subscribe(
      (user) => {
        this.currentUser = { ...user, id };
      },
      (error) => console.log(error)
    );
  }

  get userRole() {
    return this.currentUser?.role;
  }

  get currentUser() {
    return this._currentUser;
  }

  set currentUser(userInfo: CurrentUser) {
    this._currentUser = userInfo;
  }
}
