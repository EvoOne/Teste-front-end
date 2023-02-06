import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    SharedModule,
    GoogleMapsModule
  ]
})
export class MapModule { }
