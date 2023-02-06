import { OccurencesService } from './../../../occurences/services/occurences.service';
import { GeocoderResponse, Coordinates } from './../../../../core/models/geocorder-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MarkOccurencesService {

  addresses: string[] = []
  coordinates: Coordinates[] = [];

  constructor(private http: HttpClient, private occurencesService: OccurencesService) { }

  setAddress() {
    this.occurencesService.getAddresses().subscribe(
      result => {
        // console.log(result)
        this.addresses = result
      })
  }

  setCoordinatesArray() {
    this.addresses.forEach(address => {
      this.http.get<GeocoderResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDYE2WrrHqavCP9weZps3CV2NAuM8FusL4`)
        .subscribe(result => {
          const address = result.results[0].formatted_address
          const location = result.results[0].geometry.location
          this.coordinates.push({
            address: address,
            location: location
          });
        });
    });
  }

  getCoordinatesArray() {
    return this.coordinates
  }

}


