// import { Injectable } from "@angular/core";
// import { LoadingType } from "./loading-types";
// import { Subject } from 'rxjs';
// import { startWith } from 'rxjs/operators';

// @Injectable({
//     providedIn: 'root'
// })
// export class LoadingService{
//     loadingSubject = new Subject<LoadingType>();

//     getLoading() {
//         return this.loadingSubject
//             .asObservable()
//             .pipe(startWith(LoadingType.LOADING))
//     }

//     start() {
//        this.loadingSubject.next(LoadingType.LOADING)
//     }

//     stop() {
//         this.loadingSubject.next(LoadingType.STOPPED)
//     }
// }



import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { defer, finalize, NEVER, share } from 'rxjs';
import { LoadingComponent } from './loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private overlayRef: OverlayRef | undefined;

    constructor(private overlay: Overlay) { }

    show(): void {
        // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
        Promise.resolve(null).then(() => {
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create({
                    positionStrategy: this.overlay
                        .position()
                        .global()
                        .centerHorizontally()
                        .centerVertically(),
                    hasBackdrop: true
                        
                });
                this.overlayRef.attach(new ComponentPortal(LoadingComponent));
            }
        });
    }

    hide(): void {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef = undefined;
        }
    }

    public readonly spinner$ = defer(() => {
        this.show();
        return NEVER.pipe(
            finalize(() => {
                this.hide();
            })
        );
    }).pipe(share());

    
}