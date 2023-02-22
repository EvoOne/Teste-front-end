import { EventEmitter, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Occurences, Query } from '../models/occurences';

@Injectable({
  providedIn: 'root',
})
export class OccurenceService {
  constructor(private apollo: Apollo) {}

  public occurencesList = new EventEmitter();
  public results: any;

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

  getAllOccurences() {
    return this.apollo.query({
      query: this.GET_ALL_OCCURENCES,
      context: {
        headers: { 'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm' },
      },
    });
  }
}
