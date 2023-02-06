/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OccurencesService } from './occurences.service';

describe('Service: Occurences.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccurencesService]
    });
  });

  it('should ...', inject([OccurencesService], (service: OccurencesService) => {
    expect(service).toBeTruthy();
  }));
});
