import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';


@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutAppComponent implements OnInit {

  sideNavHidden: boolean = false;
  sideNavPinned: boolean = false;
  pageTitle: any;
  menuItems: any;
  mobileTab: boolean = false
  mobile: boolean = false;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {
    if (window.innerWidth < 420) {
      this.mobileTab = true

    }
  }

  toggleSideNav() {
    this.sideNavHidden = !this.sideNavHidden;
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

  toggleSideNavPin() {
    this.sideNavPinned = !this.sideNavPinned;
  }

  ngOnInit(): void {
    // this.session.init();
  }

  routeChanged() {
    this.menuService.setMenu(this.route.snapshot.firstChild?.routeConfig?.path);
    setTimeout(() => {
      this.pageTitle = this.menuService.menu()?.name;
      this.menuItems = this.menuService.menu()?.children;
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 420) {
      this.mobileTab = true
    } else if (window.innerWidth > 420) {
      this.mobileTab = false
    }
  }

}
