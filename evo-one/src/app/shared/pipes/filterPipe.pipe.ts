import { Pipe, PipeTransform } from '@angular/core';
import { Occurence } from 'src/app/core/models/occurence.model';

@Pipe({
  name: 'filterByValue'
})
export class FilterByValuePipe implements PipeTransform {
  transform(items: Occurence[], filterValue1: string, filterValue2: string): Occurence[] {
    if (!items) {
      return [];
    }
    if (!filterValue1 && !filterValue2) {
      return items;
    }
    return items.filter(item => {
      return item.data.includes(filterValue1) && item.status.includes(filterValue2);
    });
  }
}
