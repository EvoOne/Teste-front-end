import { UsersService } from './components/users-list/services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(
    private spinnerService: NgxSpinnerService,
    private UsersService: UsersService
    ) {}

  users$: Observable<User[]> | null = null;
  loading: boolean = true

  ngOnInit(): void {
    this.spinnerService.show()
    this.users$ = this.UsersService.getUsersFromAPI()
  }

}
