import { Car } from './../../cars/cars.model';
import { Observable } from 'rxjs';
import { CarsService } from './../../cars/cars.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-car-form',
  templateUrl: './rent-car-form.component.html',
  styleUrls: ['./rent-car-form.component.scss'],
})
export class RentCarFormComponent implements OnInit {
  cars$: Observable<Car[]>;
  @Input() selectedCar: string = null;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.cars$ = this.carsService.getAll();
  }
}
