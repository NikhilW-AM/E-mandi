import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAppComponent } from './layouts/app/app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthLayoutComponent } from './pages/auth/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: LayoutAppComponent,
    loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => import('src/app/pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload',
      useHash: false,
    }),
    LayoutsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
