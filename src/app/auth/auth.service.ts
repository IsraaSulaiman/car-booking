import { LoginCreds, NewUser } from './auth.model';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { user } from '../users/user.service';
export interface DecodedToken {
  expiredAt: number;
  id: string;
}

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIxIiwicm9sZSI6MSwiZXhwaXJlZEF0IjoxNjQ3NzI3MjAwMDAwLCJpYXQiOjE1MTYyMzkwMjJ9.WdF7XG28WoPyx66AKx3iGW4LcSGppKoHrKQSnPh17Qg';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token: DecodedToken;
  expiredAt: number;

  constructor(private router: Router) {}

  login(creds: LoginCreds) {
    return of({
      isSuccess: true,
      authResult: {
        idToken: jwt,
      },
      user: { ...user, id: 1 },
    }).pipe(
      tap((resp) => {
        this.setSession(resp.authResult);
        this.decodeToken();
      })
    );
  }

  setSession({ idToken }) {
    localStorage.setItem('id_token', idToken);
  }

  register(user: NewUser): Observable<any> {
    //Call
    return of({
      isSuccess: true,
    });
    // return this.throwError();
  }

  decodeToken() {
    let token = localStorage.getItem('id_token');
    if (!token) return;
    try {
      let decoded: DecodedToken = jwt_decode(token);
      if (
        decoded &&
        decoded.expiredAt &&
        this.checkIfTokenExpired(decoded.expiredAt)
      ) {
        this.token = decoded;
        this.expiredAt = decoded?.expiredAt;
      } else {
        this.logout();
      }
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

  checkIfTokenExpired(dt) {
    return dt > new Date().getTime() ? true : false;
  }

  isLogged(): boolean {
    return this.token &&
      this.expiredAt &&
      this.checkIfTokenExpired(this.expiredAt)
      ? true
      : false;
  }

  logout() {
    localStorage.removeItem('id_token');
    this.token = null;
    this.expiredAt = null;
    this.router.navigate(['/']);
  }

  throwError() {
    let error = new HttpErrorResponse({
      error: 'Invalid Email or Password',
      status: 401,
      statusText: 'Bad Request',
    });
    return throwError(error);
  }

  get userId() {
    return this.token && this.token.id;
  }
}
