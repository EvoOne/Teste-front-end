import { CoordinatesService } from './coordinates.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OccurencesService } from '../../../occurences/services/occurences.service';
import { Coordinates } from '../../../../core/models/geocorder-response-model';
import { of } from 'rxjs';
import { Occurence } from 'src/app/core/models/occurence.model';
import { Apollo } from 'apollo-angular';

describe('CoordinatesService', () => {
  const mockAddress = 'address';
  const google = window.google
  const mockLatLng = new google.maps.LatLng(-34, 21)
  const mockCoordinate: Coordinates = {
    address: 'address',
    location: mockLatLng
  };
  let coordinatesService: CoordinatesService;
  let httpTestingController: HttpTestingController;
  let occurencesService: OccurencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [

        CoordinatesService,
        { provide: OccurencesService, useClass: OccurencesService },
        Apollo
      ]
    });

    coordinatesService = TestBed.inject(CoordinatesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    occurencesService = TestBed.inject(OccurencesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(coordinatesService).toBeTruthy();
  });

  it('should set the coordinates array with given input', () => {

    spyOn(occurencesService, 'getOccurencesFromAPI').and.returnValue(of([{ address: mockAddress } as Occurence]));
    coordinatesService.getAddress();

    const req = httpTestingController.expectOne(`https://maps.googleapis.com/maps/api/geocode/json?address=${mockAddress}&key=AIzaSyDYE2WrrHqavCP9weZps3CV2NAuM8FusL4`);
    req.flush({
      results: [{
        formatted_address: mockAddress,
        geometry: {
          location: mockLatLng
        }
      }]
    });

    expect(coordinatesService['coordinates'].value).toEqual([mockCoordinate]);
  });

  it('should call the geocoder API with the correct URL', () => {

    spyOn(occurencesService, 'getOccurencesFromAPI').and.returnValue(of([{ address: mockAddress } as Occurence]));

    coordinatesService.getAddress();

    const req = httpTestingController.expectOne(`https://maps.googleapis.com/maps/api/geocode/json?address=${mockAddress}&key=AIzaSyDYE2WrrHqavCP9weZps3CV2NAuM8FusL4`);
    req.flush({
      results: [{
        formatted_address: mockAddress,
        geometry: {
          location: mockCoordinate
        }
      }]
    });

    expect(req.request.method).toEqual('GET');
  });
})
