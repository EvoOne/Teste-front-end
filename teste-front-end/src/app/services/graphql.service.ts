// import { HttpLink } from 'apollo-angular-link-http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { HttpHeaders } from '@angular/common/http';

import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})

export class GraphqlService {
  public owners: any;
  public owner: any;
  public createdOwner: any;
  public updatedOwner: any;
  private key: string = 'da2-kkfpbntbb5acnao4utbk2xvmyq';

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql' }),
      cache: new InMemoryCache()
    })
  }

  public getIncidents(){
    return this.apollo.query({
      query: gql`query MyQuery {
        listOccurences {
          address
          data
          id
          image
          title
          user
          status
        }
      }`,
      context: {
        headers: new HttpHeaders().set('x-api-key', this.key), 
      }
    })
  }
}