import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOCALE_ID } from '@angular/core';

const routes: Routes = [
  {
    path: 'occurrences',
    loadChildren: () =>
      import('./pages/ocurrences/ocurrences.module').then(
        (m) => m.OcurrencesModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'map',
    loadChildren: () =>
      import('./pages/map/map.module').then((m) => m.MapModule),
  },
  {
    path: '**',
    redirectTo: '/occurrences',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class AppRoutingModule {}
