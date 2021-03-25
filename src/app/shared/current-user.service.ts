import { UsersService } from './../users/user.service';
import { AuthService } from './../auth/auth.service';
import { CurrentUser } from './../auth/auth.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private _user: CurrentUser;

  constructor(private auth: AuthService, private usersService: UsersService) {}

  getUserData() {
    let id = this.auth.userId;
    if (id) {
      this.usersService.getById(id).subscribe(
        (resp) => {
          this.user = resp;
        },
        (error) => console.log(error)
      );
    }
  }

  get user() {
    return this._user;
  }

  set user(user: CurrentUser) {
    this._user = user;
  }

  get userRole() {
    return this.user && this.user.role;
  }
}
