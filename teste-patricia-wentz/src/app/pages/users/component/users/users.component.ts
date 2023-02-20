import { Component } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public listUsers: Users[] = [];
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 5;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.listUsers = data.listUsers;
    });
  }
  fetchUsers(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.listUsers = data.listUsers;
    });
  }

  onTableDataChange(page: number) {
    this.page = page;
    this.fetchUsers();
  }
}
