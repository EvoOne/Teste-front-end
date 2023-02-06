/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarkOccurencesService } from './mark-occurences.service';

describe('Service: MarkOccurences', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkOccurencesService]
    });
  });

  it('should ...', inject([MarkOccurencesService], (service: MarkOccurencesService) => {
    expect(service).toBeTruthy();
  }));
});
