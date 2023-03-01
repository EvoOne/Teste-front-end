import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OccurrenceService {
  constructor(private apollo: Apollo) { }

  listOccurences (): Observable<any> {
    return this.apollo.query({
      query: gql`
        query MyQuery {
          listOccurences  {
            address
            data
            id
            image
            title
            user
            status
          }
        }
      `,
      context: {
        headers: {
          'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm',
        },
      },
    }).pipe(map(({ data }) => data));
  }

  getOccurence(): Observable<any> {
    return this.apollo.query({
          query: gql`
          query MyQuery {
            getOccurence {
              address
              data
              id
              image
              title
              user
              status
            }
          }
        `,
        context: {
          headers: {
            'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm',
          },
        },
    }).pipe(map(({ data }) => data));
  }
}
