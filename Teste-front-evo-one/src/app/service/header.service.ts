import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private showFormSubject = new BehaviorSubject<boolean>(true);
  private filtersSubject = new BehaviorSubject<any>({});

  showForm$ = this.showFormSubject.asObservable();

  filters$ = this.filtersSubject.asObservable();
  updateShowForm(value: boolean) {
    this.showFormSubject.next(value);
  }
  updateFilters(filters: any) {
    this.filtersSubject.next(filters);
  }
}
