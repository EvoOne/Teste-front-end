import { PageTitleComponent } from '../components/page-title/page-title.component';
import { SpinnerComponent } from './../components/spinner/spinner.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
    declarations: [
    SpinnerComponent,
    PageTitleComponent

  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-beat' }),
  ],
  exports: [
    SpinnerComponent,
    PageTitleComponent
  ],

})
export class SharedModule { }
