import { Component, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: any = {
    role: "user"
  };
  menuItems: any;
  @Input() sideNavHidden!: boolean;

  constructor(
    // private session: SessionService,
    private menuService: MenuService
  ) {

  }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe({
      next: (resp: any) => {
        this.menuItems = resp.menus.filter((item: any) => {
          return this.user.role === "user" ? item.isUser : item.isAdmin
        })
        this.menuService.setMenus(resp.menus);
      },
      error: (err) => {

      }
    })
    // this.session.user$.subscribe((resp) => {
    //   this.user = resp
    //   this.menuService.getMenus().subscribe({
    //     next: (resp: any) => {
    //       this.menuItems = resp.menus.filter((item: any) => {
    //         return this.user.role === "user" ? item.isUser : item.isAdmin
    //       })
    //       this.menuService.setMenus(resp.menus);
    //     },
    //     error: (err) => {

    //     }
    //   })
    // })
  }

  logout() {
    // this.session.logout();
  }

  randomColorClass(index: number, icon: any) {
    const classes: any = ['text-info', 'text-warning', 'text-success', 'text-danger', 'text-indigo', 'text-blue', 'text-purple', 'text-pink', 'text-red', 'text-yellow', 'text-orange', 'text-green', 'text-teal', 'text-cyan', 'text-primary', 'text-secondary'];
    return `${icon || ''} ${classes[index % classes.length]}`;
  }
}
