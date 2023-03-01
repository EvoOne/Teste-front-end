import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Occurences } from '../../models/occurences';
import { OccurenceService } from '../../service/occurence.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public formSearch!: FormGroup;

  constructor(
    private occurenceService: OccurenceService,
    private form: FormBuilder
  ) {
    this.formSearch = this.form.group({
      date: [''],
      status: [''],
    });
  }

  searchOccurence() {
    let date: string = this.formSearch.get('date')?.value;
    let status: string = this.formSearch.get('status')?.value;

    let resultSearch = this.occurenceService.results.filter(
      (item: Occurences) => {
        return (
          item.data.search(date) !== -1 && item.status.search(status) !== -1
        );
      }
    );
    this.occurenceService.occurencesList.emit(resultSearch);
  }
}
