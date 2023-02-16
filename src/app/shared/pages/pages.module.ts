import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps.component';
import { OccurrencesComponent } from './occurrences/occurrences.component';
import { UsersComponent } from './users/users.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlertModule } from '../components/alert/alert.module';

const componentsMaterial = [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
    MatPaginatorModule,
    AlertModule
]
@NgModule({
    declarations: [
        OccurrencesComponent,
        MapsComponent,
        UsersComponent
    ],
    imports: [
        FlexLayoutModule,
        HttpClientModule,
        componentsMaterial,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAMf9uy3oNPeoIponjORrMBvEZbCtSTrNc',
            libraries: ["places"]
        })
    ],
    providers: [
        OccurrencesComponent,
        MapsComponent,
        UsersComponent,
        HttpClientModule,
    ],
    bootstrap: [
        OccurrencesComponent,
        MapsComponent,
        UsersComponent
    ]
})
export class PageModule { }
