import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Users } from '../../models/users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  public listUsers: Users[] = [];
  public pageSlice = this.listUsers.slice(1, 5);
  public totalRecords = 0;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Rows per page';

    this.usersService.getAllUsers().subscribe((data) => {
      this.listUsers = data.listUsers;
      this.pageSlice = this.listUsers.slice(1, 5);
    });
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.listUsers.length) {
      endIndex = this.listUsers.length;
    }
    this.pageSlice = this.listUsers.slice(startIndex, endIndex);
  }
}
