import { Car } from './../../cars/cars.model';
import { CarsService } from './../../cars/cars.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-gallery',
  templateUrl: './cars-gallery.component.html',
  styleUrls: ['./cars-gallery.component.scss'],
})
export class CarsGalleryComponent implements OnInit {
  cars$: Observable<Car[]>;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.cars$ = this.carsService.getAll();
  }
}
