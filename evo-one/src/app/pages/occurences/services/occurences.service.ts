import { BehaviorSubject, map, Observable, take, tap, filter } from 'rxjs';
import { Injectable } from '@angular/core';
import { Occurence } from 'src/app/core/models/occurence.model';
import { Apollo } from 'apollo-angular';
import { listOccurencesQueryResponse, LIST_OCCURENCES_QUERY } from 'src/app/graphql-queries';

@Injectable({
  providedIn: 'root'
})
export class OccurencesService {

  private _occurenceList = new BehaviorSubject<Occurence[]>([])
  public readonly occurences$: Observable<Occurence[]> = this._occurenceList.asObservable();

  constructor(
    private apollo: Apollo,

  ) { }


  getOccurences(): Observable<Occurence[]> {
    return this.apollo.watchQuery<listOccurencesQueryResponse>({
      query: LIST_OCCURENCES_QUERY
    }).valueChanges.pipe(map(result => result.data.listOccurences))
  }

  setOccurences() {
    this.apollo.watchQuery<listOccurencesQueryResponse>({
      query: LIST_OCCURENCES_QUERY
    }).valueChanges.pipe(map(result => result.data.listOccurences))
      .subscribe(occurences => this._occurenceList.next(occurences))
  }

  getAddresses(): Observable<string[]> {
    return this.occurences$.pipe(
      filter(occurrences => occurrences.length > 0),
      map(occurrences => occurrences.map(occurrence => occurrence.address)),
    )
  }

}


