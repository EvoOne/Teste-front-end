import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GraphqlService } from 'src/app/services/graphql.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
    formSearch: FormGroup;

    constructor(
      private form: FormBuilder,
      public graphql: GraphqlService,
      public router: Router
    ){
      this.formSearch = this.form.group({
        date: [''],
        status: [''],
      })
    }

    searchIndicent(){
      let date: string = this.formSearch.get('date')?.value;
      let status: string = this.formSearch.get('status')?.value;

      let resultSearch = this.graphql.results.filter((item: any) => {
        return item.data.search(date) !== -1 && item.status.search(status) !== -1;
      });
      this.graphql.incidentList.emit(resultSearch);
    }
    
}
