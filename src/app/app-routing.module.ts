import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'error',
    pathMatch: 'full',
    component: GlobalErrorComponent,
    data:
    {
      title: 'Error'
    }
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundComponent,
    data:
    {
      title: 'Not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}