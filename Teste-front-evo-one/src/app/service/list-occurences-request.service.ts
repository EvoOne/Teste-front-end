import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListOccurencesRequestService {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = new HttpHeaders({
      'x-api-key': 'da2-kpri4rkkvff25eutvkohvyzbdm',
    });
    this.http
      .get(
        'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql',
        {
          headers,
          params: {
            query: `
          query MyQuery {
            listOccurences {
              address
              data
              id
              image
              title
              user
              status
            }
          }
        `,
          },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
