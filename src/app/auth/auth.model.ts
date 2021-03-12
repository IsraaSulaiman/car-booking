export class LoginCreds {
  email: string;
  password: string;
}

export interface User {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  phone: string;
  ID: string;
  city: string;
}

export enum UserTypes {
  Individual = 1,
  Admin = 2,
}

export interface CurrentUser extends User {
  fullName: string;
  role: UserTypes;
}

export interface NewUser extends User {
  password: string;
}
