import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/cars/cars.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  cars$: Observable<Car[]>;
  constructor() {}

  ngOnInit(): void {
    this.cars$ = of([
      new Car({
        id: 1,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 2,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 3,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 4,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 5,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 6,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 7,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
      new Car({
        id: 8,
        image: '../../../assets/images/car1.png',
        name: 'Mini Perodua Axia ',
        price: 27.05,
      }),
    ]);
  }
}
