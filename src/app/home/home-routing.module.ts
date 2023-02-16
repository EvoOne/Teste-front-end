import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from '../shared/pages/maps/maps.component';
import { OccurrencesComponent } from '../shared/pages/occurrences/occurrences.component';
import { UsersComponent } from '../shared/pages/users/users.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
          {
              path: 'occurrences',
              component: OccurrencesComponent,
              data:{
                  title: 'Ocorrências'
              }
          },{
              path: 'users',
              component: UsersComponent,
              data:{
                  title: 'Usuários'
              }
          },{
              path: 'maps',
              component: MapsComponent,
              data:{
                title: 'Maps'
              }
          }
        ]
  },
  {
    path: '**',
    redirectTo: 'occurrences'
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { useHash: true }), CommonModule],
  imports: [RouterModule.forChild(routes,), CommonModule],
  exports: [RouterModule]
})
export class HomeRoutingModule {}