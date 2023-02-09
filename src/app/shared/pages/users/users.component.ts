import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HomeserviceService } from 'src/app/service/homeservice.service';
import { Users } from '../../utils/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'address'];
  users: Users[] = [];
  showFirstLastButtons = true;
  length: any = 100;
  pageIndex: any = 1;
  pageSize: any = 5;
  pageSizeOptions: any[] = [1, 5, 10, 25, 100]

  constructor(
    private service: HomeserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getRouteChange(this.router.url);
    this.getUsers();
    this.getLoadUsers();
  }

  handlePageEvent(e: PageEvent)
  {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getLoadUsers();
    this.getUsers();
  }

  getFiltersPaginationLists(items: any, pageIndex: number, pageSize: number)
  {    
    let result = [];
    let totalPage = Math.ceil(items.length / pageSize);
    let count = (pageIndex * pageSize) - pageSize;
    let delimiter = count + pageSize;
    if (pageIndex <= totalPage || pageIndex === 2 && totalPage === 1)      
    {
      for (let i = count; i < delimiter; i++)
      {     
        if (items[i] != null)
        {
          result.push(items[i]);
        }
        count++;
      }
    }
   
    return result;
  }

  getUsers()
  {
    this.service.getListUsers().subscribe((data: any) => {
      this.length = data.length;
      let items = this.getFiltersPaginationLists(data.data.listUsers, this.pageIndex + 1, this.pageSize);
      this.users = items;
      this.service.getChange(data.data.listUsers);
    })
  }

  getLoadUsers()
  {
    this.service.pushData$.subscribe((data: any) => {      
      this.length = data.length
      let items = this.getFiltersPaginationLists(data, this.pageIndex + 1, this.pageSize);
      this.users = items;
    })
  }
}
