import { ListUserRequestService } from './service/list-user-request.service';
import { ListOccurencesRequestService } from './service/list-occurences-request.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { OccurrencesListComponent } from './components/occurrences-list/occurrences-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    OccurrencesListComponent,
    UsersListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    RouterModule.forRoot([
      { path: '', component: OccurrencesListComponent },
      { path: 'users', component: UsersListComponent },
      { path: 'map', component: MapComponent },
    ]),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
    ListOccurencesRequestService,
    ListUserRequestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
