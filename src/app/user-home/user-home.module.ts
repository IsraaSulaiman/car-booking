import { UserHomeComponent } from './user-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UserHomeRoutingModule],
})
export class UserHomeModule {}
