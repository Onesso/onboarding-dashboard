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
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: '**',
    component: WildcatrouteComponent
  }
];
