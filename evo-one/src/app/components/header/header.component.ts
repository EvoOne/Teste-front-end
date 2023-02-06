import { FilterService } from './../../shared/services/filter.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  form!: FormGroup

  constructor(
    public router: Router,
    private FormBuilder: FormBuilder,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.initForm()
    this.subscribeToDateInputValue()
    this.subscribeToStatusInputValue()

  }

  initForm() {
    this.form = this.FormBuilder.group({
      dateInput: [''],
      statusInput: ['']
    })
  }

  subscribeToDateInputValue() {
    this.form.get('dateInput')?.valueChanges.subscribe(value => {
      this.filterService.filterValues.date = value;
    });
  }

  subscribeToStatusInputValue () {
    this.form.get('statusInput')?.valueChanges.subscribe(value => {
      this.filterService.filterValues.status = value;
    });
  }


}
