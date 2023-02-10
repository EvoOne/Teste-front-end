// import { Component } from '@angular/core';
// // import { GoogleMap } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

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

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  };
  latitude!: any;
  longitude!: any;

  apiLoaded: Observable<boolean>;

  constructor(private ngZone: NgZone, httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDckH1MJQu7ByJKzaEtqlJ-tpKdmNo9ffA&libraries=places',
        'callback'
      )
      .pipe(
        map(() => {
          return true;
        }),
        catchError((error) => {
          console.error(error);
          return of(false);
        })
      );
  }
  ngAfterViewInit(): void {
    this.apiLoaded.subscribe((apiLoaded) => {
      if (apiLoaded) {
        let autocomplete = new google.maps.places.Autocomplete(
          this.searchElementRef.nativeElement
        );

        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
          this.searchElementRef.nativeElement
        );
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            console.log({ place }, place.geometry.location?.lat());

            this.latitude = place.geometry.location?.lat();
            this.longitude = place.geometry.location?.lng();
            this.center = {
              lat: this.latitude,
              lng: this.longitude,
            };
          });
        });
      }
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
