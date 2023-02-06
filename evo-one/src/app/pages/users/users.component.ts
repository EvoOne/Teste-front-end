import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { listUsersQueryResponse, LIST_USERS_QUERY } from 'src/app/graphql-queries';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private apollo: Apollo, private spinnerService: NgxSpinnerService) {}

  users$: Observable<User[]> | null = null;
  loading: boolean = true


  ngOnInit(): void {
    this.spinnerService.show()
    this.listUsers()
  }

  listUsers() {
    this.users$ = this.apollo.watchQuery<listUsersQueryResponse>({
      query: LIST_USERS_QUERY
    }).valueChanges.pipe(map(result => result.data.listUsers))
  }

}
