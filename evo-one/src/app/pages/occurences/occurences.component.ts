import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { FilterByValuePipe } from './../../shared/pipes/filterPipe.pipe';
import { FilterService } from './../../shared/services/filter.service';
import { Occurence } from './../../core/models/occurence.model';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { listOccurencesQueryResponse, LIST_OCCURENCES_QUERY } from 'src/app/graphql-queries';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-occurences',
  templateUrl: './occurences.component.html',
  styleUrls: ['./occurences.component.scss']
})
export class OccurencesComponent implements OnInit{
  constructor(
    private apollo: Apollo,
    private filterService: FilterService,
    private spinnerService: NgxSpinnerService
    ) {}

  // users$: Observable<User[]> | null = null;

  occurences$: Observable<Occurence[]> | null = null;
  loading: boolean = true


  ngOnInit(): void {
    this.listOccurences()
    this.spinnerService.show()

  }

  listOccurences() {
    this.occurences$ = this.apollo.watchQuery<listOccurencesQueryResponse>({
      query: LIST_OCCURENCES_QUERY
    }).valueChanges.pipe(map(result => result.data.listOccurences))
  }

  get dateInputValue() {
    return this.filterService.filterValues.date
  }

  get statusInputValue() {
    return this.filterService.filterValues.status
  }

}
