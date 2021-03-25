import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CurrentUser } from '../auth/auth.model';

export const user = {
  firstName: 'israa',
  lastName: 'sulaiman',
  city: 'Gaza',
  mobile: '000000000',
  email: 'israa@gmail.com',
  ID: '111111111',
  fullName: 'israa sulaiman',
  role: 1,
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getById(id: string): Observable<CurrentUser> {
    return of({ ...user, id });
  }
}
