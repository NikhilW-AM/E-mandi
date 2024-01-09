import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LayoutAppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SecondNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [SecondNavComponent],
  bootstrap: [LayoutAppComponent]
})
export class LayoutsModule { }
