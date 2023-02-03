import { Menu } from './../../core/models/menu.model';
import { Component, OnInit } from '@angular/core';


export const appMenu: Menu = {
  items: [
    {
      title: 'Ocorrências',
      iconCssClass: 'occurences-icon',
      route: 'occurences',
    },
    {
      title: 'Usuários',
      iconCssClass: 'users-icon',
      route: 'users',
    },
    {
      title: 'Mapa',
      iconCssClass: 'map-icon',
      route: 'map',
    }
  ]
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})



export class SideNavComponent implements OnInit{
  menu!: Menu

  ngOnInit(): void {
      this.menu = appMenu
  }
}
