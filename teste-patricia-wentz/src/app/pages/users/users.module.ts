import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './component/users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, NgxPaginationModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-PT',
    },
  ],
})
export class UsersModule {}
