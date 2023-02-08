import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  incidents: any;
  searchResult: any;

  constructor(public graphql: GraphqlService){}

  ngOnInit(){
    this.graphql.getIncidents().subscribe(result => {
      this.incidents = result.data as any; 
      this.incidents = this.incidents.listOccurences;
      this.search("01/02/2022 15:00:00", "3");
    });
  }

  search(data: string, id: string){
    const idItem = this.incidents.findIndex((item: any) => item.data === data && item.id === id);

    if (idItem !== -1) {
      this.searchResult = this.incidents[idItem];
    }
  }
}
