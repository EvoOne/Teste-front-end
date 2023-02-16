import { Component } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent{
  incidents:any;

  constructor(public graphql: GraphqlService){}

  ngOnInit(){
    this.graphql.getIncidents().subscribe(result => {
      this.graphql.results = result.data as any; 
      this.graphql.results = this.graphql.results.listOccurences;
      this.graphql.incidentList.emit(this.graphql.results);
    });

    this.graphql.incidentList.subscribe(result => {
      this.incidents = result;
    })
  }
}
