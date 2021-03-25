import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RentCarComponent } from './rent-car/rent-car.component';

@NgModule({
  declarations: [CarsComponent, CarDetailsComponent, RentCarComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule],
})
export class CarsModule {}
