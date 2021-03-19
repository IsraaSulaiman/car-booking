import { LoginCreds, NewUser, UserTypes } from './auth.model';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIxIiwicm9sZSI6MSwiZXhwaXJlZEF0IjoxNjE1OTMyMDAwMDAwLCJpYXQiOjE1MTYyMzkwMjJ9.wkQk_NtM7mmWluTmmTx1BssPhShmMG9NiCEZSDuC4sI';

export interface Token {
  id: string;
  expiredAt: number;
  role: UserTypes;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: { id; role };
  private _expiresIn: number;

  constructor(private router: Router) {}

  login(creds: LoginCreds) {
    // A call to the backend to send creds
    return of({
      isSuccess: true,
      data: {
        authResult: {
          idToken: jwt,
        },
      },
    }).pipe(tap((resp) => this.setSession(resp.data.authResult)));
  }

  register(user: NewUser) {
    // A call to the backend to create new user
    return of({ isSuccess: true });
  }

  setSession(authResult) {
    localStorage.setItem('id_token', authResult.idToken);
    this.verifyToken();
  }

  logout() {
    localStorage.removeItem('id_token');
    this.token = null;
    this._expiresIn = null;
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return this.token &&
      this._expiresIn &&
      !this.checkIfTokenExpired(this._expiresIn)
      ? true
      : false;
  }

  verifyToken() {
    let idToken = localStorage.getItem('id_token');
    if (!idToken) return;
    let token = localStorage.getItem('id_token');
    if (!token) return;
    try {
      let decoded: Token = jwt_decode(idToken);
      this.token = decoded;
      this._expiresIn = decoded.expiredAt;
    } catch (error) {
      this.logout();
    }
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  get userId() {
    return this.token?.id;
  }

  checkIfTokenExpired(dt) {
    let now = new Date().getTime();
    return dt && dt > now ? true : false;
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
