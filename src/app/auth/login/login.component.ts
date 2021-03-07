import { LoginCreds } from './login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginCreds: LoginCreds;

  constructor() {
    this.loginCreds = new LoginCreds();
  }

  onSubmit() {
    console.log(this.loginCreds, 'form');
  }
}
