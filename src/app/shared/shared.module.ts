import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ContainerWithBgComponent } from './container-with-bg/container-with-bg.component';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  declarations: [HeaderComponent, ContainerWithBgComponent, CarCardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ContainerWithBgComponent, CarCardComponent],
})
export class SharedModule {}
