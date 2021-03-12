import { of } from 'rxjs';
import { Injectable } from '@angular/core';

export const user = {
  firstName: 'israa',
  lastName: 'sulaiman',
  city: 'Gaza',
  phone: '000000000',
  email: 'israa@gmail.com',
  ID: '111111111',
  fullName: 'israa sulaiman',
  role: 1,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getById(id) {
    //Get user from backend
    return of(user);
  }
}
