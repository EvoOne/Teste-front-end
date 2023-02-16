import { Component, Input, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})

export class IncidentComponent {
  @Input() public incident: any;
}
