import { Coordinates } from './../../core/models/geocorder-response-model';
import { MarkOccurencesService } from './services/mark-occurences/mark-occurences.service';
import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { OccurencesService } from '../occurences/services/occurences.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChildren(MapInfoWindow) infoWindowsView!: QueryList<MapInfoWindow>;

  center!: google.maps.LatLng
  markerPositions: Coordinates[] = []
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    clickable: true
  };


  constructor(
    private markOccurences: MarkOccurencesService,
    private occurencesService: OccurencesService
  ) {

  }

  ngOnInit(): void {
    this.occurencesService.occurences$.subscribe(
      occurences => {
        if (!occurences || !occurences.length) {
          debugger
          this.occurencesService.setOccurences()
        }
      })
    this.markOccurences.setAddress()
    this.markOccurences.setCoordinatesArray()
    this.markerPositions = this.markOccurences.getCoordinatesArray()
    console.log(this.markerPositions)

  }

  ngAfterViewInit(): void {

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
