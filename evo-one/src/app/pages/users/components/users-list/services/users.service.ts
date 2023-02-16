import { User } from 'src/app/core/models/user.model';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { listUsersQueryResponse, LIST_USERS_QUERY } from 'src/app/graphql-queries';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private apollo: Apollo,

  ) { }


  getUsersFromAPI(): Observable<User[]> {
    return this.apollo.watchQuery<listUsersQueryResponse>({
      query: LIST_USERS_QUERY
    }).valueChanges.pipe(map(result => result.data.listUsers))
  }

}
