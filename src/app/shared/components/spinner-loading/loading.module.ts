import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [LoadingComponent],
    imports: [CommonModule, MatProgressSpinnerModule],
    exports: [LoadingComponent]
})
export class LoadingModule{}