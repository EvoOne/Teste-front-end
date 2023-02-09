import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { ComponentsModule } from "../shared/components/components.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from "@angular/router";

const componetMaterial = [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule
]

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        componetMaterial
    ],
    exports: [],
    providers: [HttpClientModule, HomeRoutingModule]
})
export class HomeModule { }