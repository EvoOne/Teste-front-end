import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective | undefined;

  address: Address | undefined;

  position = {
    lat: -34.681,
    lng: -58.371
  }

  label = {
    color: 'red',
    text: 'Marcador'
  }

  title_adress: any;
  latitude: any;
  longitude: any;

  public handleAddressChange(address: Address) {
    console.log("Latitude " + address.geometry.location.lat())
    console.log("Longitude " + address.geometry.location.lng())

    this.changeLocation(address);
  }

  public changeLocation(address: Address){
    this.position.lat = address.geometry.location.lat();
    this.position.lng = address.geometry.location.lng();
  }

  public setLocation(){
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  ngOnInit(): void {
  }
}
