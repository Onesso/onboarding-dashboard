import { Routes } from '@angular/router';
import { LoginPageComponent } from './feature/login-page/login-page.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { WildcatrouteComponent } from './feature/wildcatroute/wildcatroute.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: '**',
    component: WildcatrouteComponent
  }
];
