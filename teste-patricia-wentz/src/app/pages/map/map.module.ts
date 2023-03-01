import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './component/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, GoogleMapsModule],
})
export class MapModule {}
