import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ListUserRequestService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo
      .query({
        query: gql`
          query MyQuery {
            listUsers {
              id
              address
              email
              name
              phone
            }
          }
        `,
        context: {
          headers: {
            'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm',
          },
        },
      })
      .pipe(map(({ data }) => data));
  }
}
