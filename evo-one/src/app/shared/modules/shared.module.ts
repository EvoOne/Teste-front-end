import { SpinnerComponent } from './../components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { GoogleMapsModule } from '@angular/google-maps';
// import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
    declarations: [
    SpinnerComponent,
  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-beat' }),
    // NgxMaskDirective,
    // NgxMaskPipe,
  ],
  exports: [
    SpinnerComponent
  ],

})
export class SharedModule { }
