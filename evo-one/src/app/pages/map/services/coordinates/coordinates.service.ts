import { OccurencesService } from '../../../occurences/services/occurences.service';
import { GeocoderResponse, Coordinates } from '../../../../core/models/geocorder-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoordinatesService {

  private coordinates = new BehaviorSubject<Coordinates[]>([])

  constructor(private http: HttpClient, private occurencesService: OccurencesService) { }

  getAddress() {
    this.occurencesService.getOccurencesFromAPI().pipe(
      map(occurrences => occurrences.map(occurrence => occurrence.address))
    ).subscribe(
      result => {
        this.setCoordinatesArray(result)
      })
  }

  setCoordinatesArray(addresses: string[]) {
    let coordinatesArray: Coordinates[] = [];
    addresses.forEach(address => {
      this.http.get<GeocoderResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDYE2WrrHqavCP9weZps3CV2NAuM8FusL4`)
        .subscribe(result => {
          const address = result.results[0].formatted_address
          const location = result.results[0].geometry.location
          coordinatesArray.push({
            address: address,
            location: location
          });
          this.coordinates.next(coordinatesArray);
        });
      });
  }

  getCoordinatesArray() {
    return this.coordinates.asObservable()
  }

}


