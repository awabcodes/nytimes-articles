import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import * as AuthSelector from '../../../auth/state/auth.selectors';
import * as AuthActions from '../../../auth/state/auth.actions';

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
    {
      label: 'Login',
      icon: 'login',
      route: '/auth/login',
      queryParam: null,
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Register',
      icon: 'person',
      route: '/auth/register',
      queryParam: null,
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Logout',
      icon: 'logout',
      route: '/',
      queryParam: null,
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  isLoggedIn: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(AuthSelector.selectIsLoggedIn)).subscribe({
      next: (value) => this.isLoggedIn = value
    });
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

}
