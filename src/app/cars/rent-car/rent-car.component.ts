import { Observable } from 'rxjs';
import { CarsService } from './../cars.service';
import { Car } from 'src/app/cars/cars.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss'],
})
export class RentCarComponent implements OnInit {
  car$: Observable<Car>;

  constructor(private carService: CarsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.car$ = this.route.paramMap.pipe(
      switchMap((params) => this.carService.getById(params.get('id')))
    );
  }
}
