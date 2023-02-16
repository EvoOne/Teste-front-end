import { TestBed } from '@angular/core/testing';

import { ListSpecificUserRequestService } from './list-specific-user-request.service';

describe('ListSpecificUserRequestService', () => {
  let service: ListSpecificUserRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSpecificUserRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
