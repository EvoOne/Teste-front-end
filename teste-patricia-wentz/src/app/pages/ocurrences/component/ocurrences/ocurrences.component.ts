import { Component } from '@angular/core';
import { Occurences, Query } from '../../models/occurences';
import { OccurenceService } from '../../service/occurence.service';

@Component({
  selector: 'app-ocurrences',
  templateUrl: './ocurrences.component.html',
  styleUrls: ['./ocurrences.component.scss'],
})
export class OcurrencesComponent {
  public incidents!: Occurences[];
  constructor(private occurenceService: OccurenceService) {}

  ngOnInit(): void {
    this.occurenceService.getAllOccurences().subscribe((result) => {
      this.occurenceService.results = result.data as Query;
      this.occurenceService.results =
        this.occurenceService.results.listOccurences;
      this.occurenceService.occurencesList.emit(this.occurenceService.results);
    });

    this.occurenceService.occurencesList.subscribe((result) => {
      this.incidents = result;
    });
  }
}
