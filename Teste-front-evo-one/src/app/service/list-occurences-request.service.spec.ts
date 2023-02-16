import { TestBed } from '@angular/core/testing';

import { ListOccurencesRequestService } from './list-occurences-request.service';

describe('ListOccurencesRequestService', () => {
  let service: ListOccurencesRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOccurencesRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
