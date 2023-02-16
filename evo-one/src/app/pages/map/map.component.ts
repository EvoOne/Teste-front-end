import { Coordinates } from './../../core/models/geocorder-response-model';
import { CoordinatesService } from './services/coordinates/coordinates.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent implements OnInit {
  @ViewChildren(MapInfoWindow) infoWindowsView!: QueryList<MapInfoWindow>;

  center!: google.maps.LatLng
  markerPositions: Coordinates[] = []
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    clickable: true
  };


  constructor(
    private coordinatesService: CoordinatesService  ) {

  }

  ngOnInit(): void {
    this.coordinatesService.getAddress()
    this.coordinatesService.getCoordinatesArray().subscribe(
      result => {
        this.markerPositions = result
        this.center = result[0]?.location
      })
  }

  openInfoWindow(marker: MapMarker, windowIndex: number) {
    let curIdx = 0;
    this.infoWindowsView.forEach((window: MapInfoWindow) => {
      if (windowIndex === curIdx) {
        window.open(marker);
        curIdx++;
      } else {
        curIdx++;
      }
    });
  }
}
