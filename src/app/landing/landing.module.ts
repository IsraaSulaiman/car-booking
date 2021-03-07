import { LandingRoutingModule } from './landing.routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CarsGalleryComponent } from './cars-gallery/cars-gallery.component';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [HeroComponent, CarsGalleryComponent, LandingComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
