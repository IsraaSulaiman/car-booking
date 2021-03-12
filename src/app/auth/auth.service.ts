import { User, LoginCreds, NewUser } from './auth.model';
import { Injectable } from '@angular/core';
import { defer, of, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';

export const user = {
  id: '1',
  firstName: 'israa',
  lastName: 'sulaiman',
  city: 'Gaza',
  phone: '000000000',
  email: 'israa@gmail.com',
  ID: '111111111',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: string;
  private _user: User;

  constructor() {}

  login(creds: LoginCreds) {
    // A call to the backend to send creds
    return of({
      isSuccess: true,
      data: {
        jwtToken: 'token',
        user,
      },
    }).pipe(
      tap((resp) => {
        this.token = resp.data.jwtToken;
        this.user = resp.data.user;
      })
    );
  }

  register(user: NewUser) {
    // A call to the backend to create new user
    return of({ isSuccess: true });
  }

  set token(token) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  set user(user: User) {
    debugger;
    this._user = user;
  }

  get user() {
    return this._user;
  }

  //Mock Method to generate error
  throwError() {
    const errorResponse = new HttpErrorResponse({
      error: 'Password or email is invalid',
      status: 400,
      statusText: 'Bad Request',
    });
    return throwError(errorResponse);
  }
}
