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
  //key : AIzaSyCkH1M4pyAzG1ccy08eEghT3CVR8FBldRk
  position: any;

  label = {
    color: 'red',
    text: 'Marcador'
  }

  public handleAddressChange(address: Address) {
    console.log("Latitude " + address.geometry.location.lat())
    console.log("Longitude " + address.geometry.location.lng())
    this.position = {
      latitude: address.geometry.location.lat(),
      longitudo: address.geometry.location.lng()
    }
    this.changePosition(address.geometry.location.lat(), address.geometry.location.lng());
  }

  changePosition(lat:any, lng: any) {
    alert('oi')
    this.position.lat = lat;
    this.position.lng = lng;
  }

  ngOnInit(): void {
  }
}
