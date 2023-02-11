import { HeaderService } from './../../service/header.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  currentRoute = 'occurrences';
  constructor(private HeaderService: HeaderService) {
    if (this.currentRoute !== 'occurrences') {
      this.HeaderService.updateShowForm(false);
    } else {
      this.HeaderService.updateShowForm(true);
    }
  }
  setCurrentRoute(route: string) {
    this.currentRoute = route;
    if (this.currentRoute !== 'occurrences') {
      this.HeaderService.updateShowForm(false);
    } else {
      this.HeaderService.updateShowForm(true);
    }
  }
}
