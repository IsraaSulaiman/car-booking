import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  get isLogged() {
    return this.authService.isLoggedIn();
  }
}
