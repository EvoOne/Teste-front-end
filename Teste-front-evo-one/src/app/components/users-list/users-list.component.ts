import { ListUserRequestService } from './../../service/list-user-request.service';
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  start: number = 0;
  itemsPerPage: number = 5;
  left = faAngleLeft;
  right = faAngleRight;

  constructor(
    @Inject(ListUserRequestService)
    private ListUserRequestService: ListUserRequestService
  ) {}
  ngOnInit() {
    this.ListUserRequestService.getUsers().subscribe((users) => {
      this.users = users.listUsers;
    });
  }
  nextPage() {
    if (this.start + this.itemsPerPage > this.users.length) {
      return;
    }
    this.start += this.itemsPerPage;
  }

  previousPage() {
    if (this.start - this.itemsPerPage < 0) {
      return;
    }
    this.start -= this.itemsPerPage;
  }
}
