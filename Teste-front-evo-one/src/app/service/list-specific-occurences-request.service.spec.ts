import { TestBed } from '@angular/core/testing';

import { ListSpecificOccurencesRequestService } from './list-specific-occurences-request.service';

describe('ListSpecificOccurencesRequestService', () => {
  let service: ListSpecificOccurencesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSpecificOccurencesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
