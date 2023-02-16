

import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { Occurence } from 'src/app/core/models/occurence.model';
import { LIST_OCCURENCES_QUERY } from 'src/app/graphql-queries';
import { OccurencesService } from './occurences.service';

describe('Service: Occurences.service.ts', () => {
  let service: OccurencesService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        OccurencesService
      ]
    });
    service = TestBed.inject(OccurencesService
    );
    controller = TestBed.inject(ApolloTestingController);
  });

  it('should return occurences list', (done) => {

    service.getOccurencesFromAPI().subscribe(res => {
      expect(res[0].address).toEqual('Address1')
      expect(res[1].image).toEqual('url2')
      done()
    })
    const req = controller.expectOne(LIST_OCCURENCES_QUERY);

    expect(req.operation.operationName).toBe('listOccurences');

    req.flush({
      data: {
        listOccurences: [
          { id: '1', data: '11/02/1998', address: 'Address1', image: 'url1', title: 'OccuranceTitle1', user: 'user1', status: 'active' },
          { id: '2', data: '04/07/2000', address: 'Address2', image: 'url2', title: 'OccuranceTitle2', user: 'user2', status: 'waiting' }
        ]
      }
    });
    controller.verify();
  });
});
