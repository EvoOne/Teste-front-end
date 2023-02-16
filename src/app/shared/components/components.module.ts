import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToobarComponent } from './toobar/toobar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoadingModule } from './spinner-loading/loading.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

const componetModule = [
  
  CommonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonToggleModule,
  FlexLayoutModule,
  LoadingModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    ToobarComponent
  ],  
  exports: [
    ToobarComponent,
    LoadingModule
  ],
  imports: [
    componetModule,
  ],
  providers: []

})
export class ComponentsModule { }
