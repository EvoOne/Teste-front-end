import { Component, Input, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})

export class IncidentComponent implements OnInit {
  // @Input() public incidents: any;
  incidents: any;

  constructor(public graphql: GraphqlService){}

  ngOnInit(){
    this.graphql.getIncidents().subscribe(result => {
      this.incidents = result.data as any; 
      this.incidents = this.incidents.listOccurences;
      // this.search("01/02/2022 15:00:00", "3");
    });
  }
}
