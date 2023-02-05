import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { HttpHeaders } from '@angular/common/http';

const uri = 'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql'; // <-- add the URL of the GraphQL server here
const apiKey = 'da2-kkfpbntbb5acnao4utbk2xvmyq';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const headers = new HttpHeaders({ 'x-api-key': apiKey });
  return {
    link: httpLink.create({uri, headers}),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
