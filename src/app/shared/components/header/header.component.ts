import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      route: '/',
      queryParam: null,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'World',
      icon: 'map',
      route: '/articles/list',
      queryParam: { section: 'world' },
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Science',
      icon: 'science',
      route: '/articles/list',
      queryParam: { section: 'science' },
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Search',
      icon: 'search',
      route: '/articles/search',
      queryParam: null,
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
