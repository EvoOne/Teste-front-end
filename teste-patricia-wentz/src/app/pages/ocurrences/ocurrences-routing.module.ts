import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcurrencesComponent } from './component/ocurrences/ocurrences.component';

const routes: Routes = [
  {
    path: '',
    component: OcurrencesComponent,
  },
  // {
  //   path: ':id',
  //   component: ProductsDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcurrencesRoutingModule {}
