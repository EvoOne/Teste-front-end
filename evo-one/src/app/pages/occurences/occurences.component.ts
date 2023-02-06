import { Observable } from 'rxjs';
import { OccurencesService } from './services/occurences.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterService } from './../../shared/services/filter.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Occurence } from 'src/app/core/models/occurence.model';

@Component({
  selector: 'app-occurences',
  templateUrl: './occurences.component.html',
  styleUrls: ['./occurences.component.scss'],
})

export class OccurencesComponent implements OnInit{
  constructor(
    private filterService: FilterService,
    private spinnerService: NgxSpinnerService,
    public occurencesService: OccurencesService
    ) {}

    occurences$: Observable<Occurence[]> | null = null

  ngOnInit(): void {
    this.spinnerService.show()
    this.occurences$ = this.occurencesService.getOccurencesFromAPI()
  }

  get dateInputValue() {
    return this.filterService.filterValues.date
  }

  get statusInputValue() {
    return this.filterService.filterValues.status
  }

}
