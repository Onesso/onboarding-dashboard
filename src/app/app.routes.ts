import { Routes } from '@angular/router';
import { LoginPageComponent } from './feature/login-page/login-page.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { WildcatrouteComponent } from './feature/wildcatroute/wildcatroute.component';
import { CustomerComponent } from './feature/customer/customer.component';
import { CustomerDetailComponent } from './feature/customer-detail/customer-detail.component';
import { SettingsComponent } from './feature/settings/settings.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'login page',
  },
  {
    path: '',
    redirectTo: 'layout/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard page',
      },
      {
        path: 'customer',
        component: CustomerComponent,
        title: 'Customer page',
      },
      {
        path: 'customer/:id',
        component: CustomerDetailComponent,
        title: 'customer detail page',
      },
      {
        path: 'setting',
        component: SettingsComponent,
        title: 'settings page',
      },
    ],
  },
  {
    path: '**',
    component: WildcatrouteComponent,
    title: 'Page 404',
  },
];
