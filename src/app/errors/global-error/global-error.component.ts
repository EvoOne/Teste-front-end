import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html'
})
export class GlobalErrorComponent { 
  link: any;
  constructor(private route: Router) {
    this.link = this.route.navigate(['/error'])
  }
}
