import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { HttpLink } from 'apollo-angular/http';
import {
  InMemoryCache,
  ApolloClientOptions,
  ApolloLink,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { UsersComponent } from './users/users.component';
import { OccurencesComponent } from './occurences/occurences.component';

const url =
  'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql';

const sethApi = setContext(() => ({
  headers: new HttpHeaders().set('x-api-key', 'da2-kpri4rkkvff25eutvkohvyzbdm'),
}));

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([
      sethApi,
      httpLink.create({ uri: url, method: 'POST' }),
    ]),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    MapGoogleComponent,
    UsersComponent,
    OccurencesComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: 'map-google', component: MapGoogleComponent },
      { path: 'users', component: UsersComponent },
      { path: 'occurences', component: OccurencesComponent },
    ]),
    ApolloModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [MatPaginatorModule, MatButtonModule, MatIconModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
