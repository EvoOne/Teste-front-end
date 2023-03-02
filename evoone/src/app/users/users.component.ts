import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apollo, gql } from 'apollo-angular';
import { UserList } from './models/usersList';

const getUsers = gql`
  query {
    listUsers {
      id
      address
      email
      name
      phone
    }
  }
`;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  allUsers: UserList[] = [];
  displayedColumns: string[] = ['name', 'phone', 'address'];
  dataSource = new MatTableDataSource<UserList>(this.allUsers);

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: getUsers,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(loading);
        this.allUsers = data.listUsers;
      });
  }
}
