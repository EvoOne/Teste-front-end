import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Occurences, Query } from '../models/occurences';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OccurenceService {
  constructor(private apollo: Apollo) {}

  GET_ALL_OCCURENCES = gql<Query, Occurences>`
    query MyQuery {
      listOccurences {
        address
        data
        id
        image
        title
        user
        status
      }
    }
  `;

  getAllOccurences(): Observable<Query> {
    return this.apollo
      .query({
        query: this.GET_ALL_OCCURENCES,
        context: {
          headers: { 'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm' },
        },
      })
      .pipe(map(({ data }) => data));
  }
}
