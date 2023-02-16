import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccurencesComponent } from './occurences.component';

const routes: Routes = [{ path: '', component: OccurencesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccurencesRoutingModule { }
