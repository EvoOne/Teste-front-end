import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideBarComponent],
  imports: [BrowserModule, ApolloModule, HttpClientModule, FontAwesomeModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://xsksoss2sneujaauha6u5wqzsq.appsync-api.us-west-1.amazonaws.com/graphql?key=da2-kpri4rkkvff25eutvkohvyzbdm',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
