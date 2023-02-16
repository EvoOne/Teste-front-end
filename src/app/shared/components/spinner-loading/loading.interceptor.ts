import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, Subscription } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    
    constructor(private readonly spinnerOverlayService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerOverlayService.show()
        return next.handle(req).pipe(finalize(() => this.spinnerOverlayService.hide()));
  }
}