import { Component } from '@angular/core';
import { Occurences } from '../../models/occurences';
import { OccurenceService } from '../../service/occurence.service';

@Component({
  selector: 'app-ocurrences',
  templateUrl: './ocurrences.component.html',
  styleUrls: ['./ocurrences.component.scss'],
})
export class OcurrencesComponent {
  public listOccurences: Occurences[] = [];

  constructor(private occurenceService: OccurenceService) {}

  ngOnInit(): void {
    this.occurenceService.getAllOccurences().subscribe((data) => {
      this.listOccurences = data.listOccurences;
    });
  }
}
