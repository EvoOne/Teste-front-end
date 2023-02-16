import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from './shared/components/components.module';
import { PageModule } from './shared/pages/pages.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerInterceptor } from './shared/components/spinner-loading/loading.interceptor';
import { ErrosModule } from './errors/erros.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule ,
    ErrosModule,
    AppRoutingModule,
    HomeModule,
    ComponentsModule,
    PageModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  exports: [FlexLayoutModule],
  providers: [
    AppRoutingModule,
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
