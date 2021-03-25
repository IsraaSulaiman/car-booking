import { CurrentUserService } from './shared/current-user.service';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    this.authService.decodeToken();
    this.currentUserService.getUserData();
  }

  get isIndividual() {
    return this.currentUserService.userRole === 1;
  }
}
