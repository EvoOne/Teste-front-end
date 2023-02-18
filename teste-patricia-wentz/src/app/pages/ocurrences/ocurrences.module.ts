import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcurrencesRoutingModule } from './ocurrences-routing.module';
import { OcurrencesComponent } from './component/ocurrences/ocurrences.component';

@NgModule({
  declarations: [OcurrencesComponent],
  imports: [CommonModule, OcurrencesRoutingModule],
})
export class OcurrencesModule {}
