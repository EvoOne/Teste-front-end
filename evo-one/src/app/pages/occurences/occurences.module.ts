import { SharedModule } from './../../shared/modules/shared.module';
import { MaterialModule } from '../../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OccurencesRoutingModule } from './occurences-routing.module';
import { OccurencesComponent } from './occurences.component';
import { OccurenceCardComponent } from './components/occurence-card/occurence-card.component';
import { FilterByValuePipe } from 'src/app/shared/pipes/filterPipe.pipe';



@NgModule({
  declarations: [
    OccurencesComponent,
    OccurenceCardComponent,
    FilterByValuePipe
  ],
  imports: [
    CommonModule,
    OccurencesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OccurencesModule { }
