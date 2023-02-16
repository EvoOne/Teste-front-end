import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{
  users: any;
  resultUsers: any;
  displayedColumns = ["name", "phone", "address"];

  public pageSize = 5;
  public currentPage = 0;
  public pageIndex = 0;
  public size = 0;
  public hidePageSize = false;
  pageEvent: PageEvent | any;

  @ViewChild('paginator') paginator: MatPaginator | any;
  
  constructor(public graphql: GraphqlService){}

  ngOnInit(){
    this.graphql.getUser().subscribe(result => {
      this.resultUsers = result.data as any;
      let initData = this.resultUsers.listUsers;
      initData = initData.slice(0, this.pageSize);
      this.users = new MatTableDataSource([]);
      this.users.data = initData; 
      this.size = this.resultUsers.listUsers.length;
      this.users.paginator = this.paginator;
      this.pageSize = 5;
    });
  }

  public handlePage(e: PageEvent) {
    this.pageEvent = e;
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.size = e.length;
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    let part = this.resultUsers.listUsers;
    part = part.slice(start, end);
    this.users.data = part;
  }
}
