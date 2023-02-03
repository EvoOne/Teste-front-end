import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccurencesRoutingModule } from './occurences-routing.module';
import { OccurencesComponent } from './occurences.component';
import { OccurenceCardComponent } from './components/occurence-card/occurence-card.component';


@NgModule({
  declarations: [
    OccurencesComponent,
    OccurenceCardComponent
  ],
  imports: [
    CommonModule,
    OccurencesRoutingModule
  ]
})
export class OccurencesModule { }
