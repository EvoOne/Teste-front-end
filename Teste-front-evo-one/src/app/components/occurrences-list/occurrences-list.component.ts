import { HeaderService } from './../../service/header.service';
import { ListOccurencesRequestService } from './../../service/list-occurences-request.service';
import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-occurrences-list',
  templateUrl: './occurrences-list.component.html',
  styleUrls: ['./occurrences-list.component.css'],
})
export class OccurrencesListComponent implements OnInit {
  occurences: any[] = [];
  circle = faCircle;
  dateFilter = '';
  statusFilter = '';
  constructor(
    @Inject(ListOccurencesRequestService)
    private listOccurencesRequestService: ListOccurencesRequestService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.listOccurencesRequestService
      .getOccurrences()
      .subscribe((data: any) => {
        this.occurences = data.listOccurences;
      });
    this.headerService.filters$.subscribe((filters) => {
      this.dateFilter = filters.dateFilter;
      this.statusFilter = filters.statusFilter;
      this.applyFilters();
    });
  }
  applyFilters() {
    if (this.dateFilter == '' && this.statusFilter == '') {
      this.listOccurencesRequestService
        .getOccurrences()
        .subscribe((data: any) => {
          this.occurences = data.listOccurences;
        });
    }
    this.occurences = this.occurences.filter((occurrence: any) => {
      return (
        (!this.dateFilter || occurrence.data.includes(this.dateFilter)) &&
        (!this.statusFilter || occurrence.status.includes(this.statusFilter))
      );
    });
  }
}
