import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, AfterViewInit{
  constructor(private paginatorIntl: MatPaginatorIntl,
    ) {

  }
  // USERS LIST COMING FROM API REQUEST
  @Input()  usersList: User[] = []

  // TABLE SOURCE
  dataSource = new MatTableDataSource<User>(this.usersList);

  // TABLE COLUMNS
  displayedColumns = ['name', 'phone', 'address']

  // PAGINATOR
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit () {
    this.dataSource = new MatTableDataSource<User>(this.usersList);
    this.getPtBrPaginatorIntl()

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  // CHANGES PAGINATOR'S LABELS TO PT-BR
  getPtBrPaginatorIntl(): void {
    this.paginatorIntl.firstPageLabel = 'Primeira página';
    this.paginatorIntl.itemsPerPageLabel = 'Usuários por Página';
    this.paginatorIntl.nextPageLabel = 'Próximo';
    this.paginatorIntl.previousPageLabel = 'Voltar';
    this.paginatorIntl.lastPageLabel = "Última Página"
  }

}
