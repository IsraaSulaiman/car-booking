import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './cars.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}

  getAll(): Observable<Car[]> {
    return of(
      Array(8).fill(
        new Car({
          id: 1,
          name: 'Mini Perodua Axia ',
          price: 27.18,
          image: '../../assets/images/car1.png',
        })
      )
    );
  }
}
