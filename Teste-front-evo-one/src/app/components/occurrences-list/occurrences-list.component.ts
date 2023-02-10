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
  occurences: any = {};
  circle = faCircle;
  filters = { date: '', status: '' };
  constructor(
    @Inject(ListOccurencesRequestService)
    private listOccurencesRequestService: ListOccurencesRequestService
  ) {}

  ngOnInit() {
    this.listOccurencesRequestService
      .getOccurrences()
      .subscribe((data: any) => {
        this.occurences = data;
      });
  }
}
