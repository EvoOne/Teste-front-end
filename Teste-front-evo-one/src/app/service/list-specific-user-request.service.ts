import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class ListSpecificUserRequestService {
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .query({
        query: gql`
          query MyQuery {
            getUser(data: { id: "1" }) {
              id
              address
              email
              name
              phone
            }
          }
        `,
        context: {
          headers: {
            'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm',
          },
        },
      })
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
