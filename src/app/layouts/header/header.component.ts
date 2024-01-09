import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter();
  @Output() onToggleSideNavPin: EventEmitter<any> = new EventEmitter();
  @Input() sideNavHidden: boolean = false;

  user: any;
  @Input() pageTitle: any;
  avatar = {
    "font-size": "16px",
  }

  constructor(
    // public session: SessionService,
    private route: ActivatedRoute,
    // private menuService: MenuService
  ) {
    // this.session.user$.subscribe((resp)=>{
    //   this.user = resp;     
    // })
  }

  logout() {
    // this.session.logout();
  }

  ngOnInit(): void {
    // this.route.url.subscribe({
    //   next: (urlSegment) => {
    //     setTimeout(() => {
    //       this.pageTitle = this.menuService.menu()?.name;
    //     }, 100);
    //   }
    // });
  }

  toggleSideNav() {
    this.onToggleSideNav.emit();
  }

  toggleSideNavPin() {
    this.onToggleSideNavPin.emit();
  }

  reloadSession() {
    // this.session.init();
  }

  test(x: any) {
    console.log(x);
    x.open();
  }

}
