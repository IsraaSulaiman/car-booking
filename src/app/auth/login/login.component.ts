import { CurrentUserService } from './../../shared/current-user.service';
import { AuthService } from './../auth.service';
import { LoginCreds } from './../auth.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginCreds: LoginCreds;

  constructor(
    private authService: AuthService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) {
    this.loginCreds = new LoginCreds();
  }

  onSubmit() {
    this.authService.login(this.loginCreds).subscribe(
      (resp: any) => {
        if (resp.isSuccess) {
          this.currentUserService.user = resp.user;
          this.router.navigate(['/']);
        }
      },
      (error) => console.log(error, 'error')
    );
  }
}
