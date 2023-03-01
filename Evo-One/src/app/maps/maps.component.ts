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
  position: any;

  label = {
    color: 'red',
    text: 'Marcador'
  }

  public handleAddressChange(address: Address) {
    this.position = {
      latitude: address.geometry.location.lat(),
      longitudo: address.geometry.location.lng()
    }
    this.changePosition(address.geometry.location.lat(), address.geometry.location.lng());
  }

  changePosition(lat:any, lng: any) {
    this.position.lat = lat;
    this.position.lng = lng;
  }

  ngOnInit(): void {
  }
}
