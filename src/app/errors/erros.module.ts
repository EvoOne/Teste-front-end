import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrosModule { }
