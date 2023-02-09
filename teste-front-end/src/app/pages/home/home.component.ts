import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent{
  // search(data: string, id: string){
  //   const idItem = this.incidents.findIndex((item: any) => item.data === data && item.id === id);

  //   if (idItem !== -1) {
  //     this.searchResult = this.incidents[idItem];
  //   }
  // }
}
