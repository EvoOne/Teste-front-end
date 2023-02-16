import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
let headers = new HttpHeaders()
headers = headers.append('x-api-key', 'da2-kpri4rkkvff25eutvkohvyzbdm');
@Injectable({
  providedIn: 'root'
})

export class HomeserviceService implements OnInit {
  api: string = environment.apiUrl
  private getData = new Subject<any[]>()
  private getRoute = new Subject<string>()

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  pushData$ = this.getData.asObservable();
  routeAtual$ = this.getRoute.asObservable();

  getChange(change: any) {
    this.getData.next(change);
  }
  getRouteChange(change: string) {
    this.getRoute.next(change);
  }

  getUser(id: number) {
    let reqBodyObj = {
      "query": `query MyQuery {
        getUser(data: {id: "${id}"} ) {
          id
          address
          email
          name
          phone
        }
      }`
    }
    return this.http.post<any>(this.api, reqBodyObj, { headers });
  }

  getListUsers() {
    let reqBodyObj = {
      "query": `query MyQuery {
        listUsers {
          id
          address
          email
          name
          phone
        }
      }`
    }

    return this.http.post<any>(this.api, reqBodyObj, { headers });
  }

  getOccurence(id: number) {

    let reqBodyObj = {
      "query": `query MyQuery {
        getOccurence(data: {id: "${id}"}) {
          address
          data
          id
          image
          title
          user
          status
        }
      }`
    }

    return this.http.post<any>(this.api, reqBodyObj, { headers });
  }

  geListAllOccurrences(): Observable<any> {

    let reqBodyObj = {
      "query": `query MyQuery 
      { listOccurences {
          address
          data
          id
          image
          title
          user
          status
        }
      }`
    }

    return this.http.post<any>(this.api, reqBodyObj, { headers });
  }
}
