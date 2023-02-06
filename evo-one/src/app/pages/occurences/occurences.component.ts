import { OccurencesService } from './services/occurences.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FilterService } from './../../shared/services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occurences',
  templateUrl: './occurences.component.html',
  styleUrls: ['./occurences.component.scss']
})
export class OccurencesComponent implements OnInit{
  constructor(
    private filterService: FilterService,
    private spinnerService: NgxSpinnerService,
    public occurencesService: OccurencesService
    ) {}


  ngOnInit(): void {
    this.spinnerService.show()
    this.occurencesService.occurences$.subscribe(
      occurences => {
        if (!occurences || !occurences.length) {
          this.occurencesService.setOccurences()
        }
      })


  }

  get dateInputValue() {
    return this.filterService.filterValues.date
  }

  get statusInputValue() {
    return this.filterService.filterValues.status
  }

}
