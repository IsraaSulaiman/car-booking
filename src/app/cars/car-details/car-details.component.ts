import { Observable } from 'rxjs';
import { Car } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car$: Observable<Car>;

  constructor(
    private carService: CarsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.car$ = this.route.paramMap.pipe(
      switchMap((params) => this.carService.getById(params.get('id')))
    );
  }

  goBack() {
    this.location.back();
  }
}
