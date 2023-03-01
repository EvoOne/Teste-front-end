import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  private URL: string = environment.API_URL;
  private KEY: string = environment.API_KEY;

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(`${this.URL}${this.KEY}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
