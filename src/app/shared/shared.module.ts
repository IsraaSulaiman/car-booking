import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ContainerWithBgComponent } from './container-with-bg/container-with-bg.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarsFilterComponent } from './cars-filter/cars-filter.component';
import { RentCarFormComponent } from './rent-car-form/rent-car-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContainerWithBgComponent,
    CarCardComponent,
    CarsFilterComponent,
    RentCarFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    HeaderComponent,
    RentCarFormComponent,
    ContainerWithBgComponent,
    CarsFilterComponent,
    CarCardComponent,
  ],
})
export class SharedModule {}
