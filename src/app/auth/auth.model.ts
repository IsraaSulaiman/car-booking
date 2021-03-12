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

export interface NewUser extends User {
  password: string;
}
