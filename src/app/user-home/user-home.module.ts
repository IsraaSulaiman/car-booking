import { UserHomeComponent } from './user-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [UserHomeComponent, CarsListComponent],
  imports: [CommonModule, UserHomeRoutingModule, SharedModule],
})
export class UserHomeModule {}
