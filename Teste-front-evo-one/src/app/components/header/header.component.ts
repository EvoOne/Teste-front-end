import { HeaderService } from './../../service/header.service';
import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showForm = true;
  faSearch = faMagnifyingGlass;
  dateFilter = '';
  statusFilter = '';
  constructor(private headerService: HeaderService) {
    this.headerService.showForm$.subscribe((showForm) => {
      this.showForm = showForm;
      console.log(this.showForm);
    });
  }

  applyFilters() {
    this.headerService.updateFilters({
      dateFilter: this.dateFilter,
      statusFilter: this.statusFilter,
    });
  }
}
