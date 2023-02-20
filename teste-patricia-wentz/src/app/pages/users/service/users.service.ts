import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { QueryUsers, Users } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apollo: Apollo) {}

  GET_ALL_USERS = gql<QueryUsers, Users>`
    query MyQuery {
      listUsers {
        id
        address
        email
        name
        phone
      }
    }
  `;

  getAllUsers(): Observable<QueryUsers> {
    return this.apollo
      .query({
        query: this.GET_ALL_USERS,
        context: {
          headers: { 'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm' },
        },
      })
      .pipe(map(({ data }) => data));
  }
}
