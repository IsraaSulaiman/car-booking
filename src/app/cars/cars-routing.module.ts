import { RentCarComponent } from './rent-car/rent-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
  },
  {
    path: ':id/book',
    component: RentCarComponent,
  },
  {
    path: ':id',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
