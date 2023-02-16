import { HeaderService } from './../../service/header.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  path: any = '';
  currentRoute = 'Occurences';
  localVariable: any;
  constructor(
    private HeaderService: HeaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.localVariable = data;
        this.currentRoute = this.localVariable.variableName.toString();
        if (this.currentRoute !== 'Occurences') {
          this.HeaderService.updateShowForm(false);
        } else {
          this.HeaderService.updateShowForm(true);
        }
      });
  }
  setCurrentRoute() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.localVariable = data;
        this.currentRoute = this.localVariable.variableName.toString();
        if (this.currentRoute !== 'Occurences') {
          this.HeaderService.updateShowForm(false);
        } else {
          this.HeaderService.updateShowForm(true);
        }
      });
  }
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.localVariable = data;
        this.currentRoute = this.localVariable.variableName.toString();
      });
  }
}
