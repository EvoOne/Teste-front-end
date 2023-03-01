import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcurrencesRoutingModule } from './ocurrences-routing.module';
import { OcurrencesComponent } from './component/ocurrences/ocurrences.component';
import { FormComponent } from './component/form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OcurrencesComponent, FormComponent],
  imports: [
    CommonModule,
    OcurrencesRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OcurrencesModule {}
