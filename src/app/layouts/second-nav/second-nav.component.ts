import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondNavComponent implements OnInit {

  @Input() menuItems: any;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit(): void { }

  activeMenu() {
    return this.menuService.menu();
  }

  isActiveMenu(path: any) {
    return `/${this.route.snapshot.firstChild?.firstChild?.routeConfig?.path}` == path;
  }

}
