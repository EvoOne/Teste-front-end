import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Occurence } from 'src/app/core/models/occurence.model';
import { Apollo } from 'apollo-angular';
import { listOccurencesQueryResponse, LIST_OCCURENCES_QUERY } from 'src/app/graphql-queries';

@Injectable({
  providedIn: 'root'
})
export class OccurencesService {


  constructor(
    private apollo: Apollo,

  ) { }


  getOccurencesFromAPI(): Observable<Occurence[]> {
    return this.apollo.watchQuery<listOccurencesQueryResponse>({
      query: LIST_OCCURENCES_QUERY
    }).valueChanges.pipe(map(result => result.data.listOccurences))
  }
}


