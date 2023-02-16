import { TestBed } from '@angular/core/testing';

import { ListUserRequestService } from './list-user-request.service';

describe('ListUserRequestService', () => {
  let service: ListUserRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUserRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
