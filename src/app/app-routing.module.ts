import { RoleGuard } from './shared/guards/role.guard';
import { UnauthenticatedGuard } from './shared/guards/unauthenticated.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'auth',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('./user-home/user-home.module').then((m) => m.UserHomeModule),
    data: {
      allowedRoles: [1],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
