import { ListOccurencesRequestService } from './../../service/list-occurences-request.service';
import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MapGeocoder } from '@angular/google-maps';
export interface MapGeocoderResponse {
  status: google.maps.GeocoderStatus;
  results: google.maps.GeocoderResult[];
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  title = 'angular-google-map-search';
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    center: { lat: -30.0687298, lng: -51.1660269 },
    zoom: 13,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  occurences: any[] = [];
  positions: any[] = [];

  constructor(
    @Inject(ListOccurencesRequestService)
    private listOccurencesRequestService: ListOccurencesRequestService,
    geocoder: MapGeocoder
  ) {
    this.listOccurencesRequestService
      .getOccurrences()
      .subscribe((data: any) => {
        this.occurences = data.listOccurences;
        this.occurences.map((occurences) => {
          geocoder
            .geocode({
              address: occurences.address,
            })
            .subscribe(({ results }: MapGeocoderResponse) => {
              this.positions.push({
                title: occurences.title,
                position: results[0].geometry.location,
              });
            });
        });
      });
  }
  ngAfterViewInit(): void {
    const searchBox = new google.maps.places.SearchBox(
      this.searchElementRef.nativeElement
    );
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places?.length === 0) {
        return;
      }
      const bounds = new google.maps.LatLngBounds();
      places?.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          return;
        }
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
    });
  }

  ngOnInit() {}
}
