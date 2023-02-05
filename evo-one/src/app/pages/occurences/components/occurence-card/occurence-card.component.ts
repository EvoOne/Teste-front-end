import { Occurence } from './../../../../core/models/occurence.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-occurence-card',
  templateUrl: './occurence-card.component.html',
  styleUrls: ['./occurence-card.component.scss']
})

export class OccurenceCardComponent {
  @Input() occurence!: Occurence

}
