import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import * as menus from './menus.json'
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItem: any;
  private menuItems: any[] = [];

  constructor() {


  }

  public setMenu(path: string | undefined): void {
    this.menuItem = this.menuItems.find((menu: any) => {
      return menu.route.replace("/", "") == path;
    });
  }

  public getMenus() {
    return of(menus);
  }

  public setMenus(menus: any) {
    this.menuItems = menus;
  }

  public menus() {
    return this.menuItems;
  }

  menu() {
    return this.menuItem;
  }

  isActive(path: any) {
    return this.menu().route == `/${path}`;
  }



}

