

import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { LIST_USERS_QUERY } from 'src/app/graphql-queries';
import { UsersService } from './users.service';

describe('Service: Users.service.ts', () => {
  let service: UsersService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        UsersService
      ]
    });
    service = TestBed.inject(UsersService
    );
    controller = TestBed.inject(ApolloTestingController);
  });

  it('should return users list', (done) => {

    service.getUsersFromAPI().subscribe(res => {
      expect(res[0].address).toEqual('Address1')
      expect(res[1].name).toEqual('Natalie')
      done()
    })
    const req = controller.expectOne(LIST_USERS_QUERY);

    expect(req.operation.operationName).toBe('listUsers');

    req.flush({
      data: {
        listUsers: [
          { id: '1', name: 'Eduardo', address: 'Address1', email: 'abc@gmail.com', phone: '51996965687'},
          { id: '2', name: 'Natalie', address: 'Address2', email: 'def@gmail.com', phone: '51997378745'}
        ]
      }
    });
    controller.verify();
  });
});
