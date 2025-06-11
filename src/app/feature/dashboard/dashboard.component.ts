import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingserviceService } from '../../service/onboardingservice.service';
import { LucideAngularModule, User } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {
  MoveUp,
  MoveDown,
  LogOut,
  LayoutDashboard,
  Users,
  Settings,
} from 'lucide-angular';
import { FunnelChartComponent } from '../../component/Dashboardcomponent/funnel-chart/funnel-chart.component';
import { TrendChartComponentComponent } from '../../component/Dashboardcomponent/trend-chart-component/trend-chart-component.component';
import { LatestOnboardingTableComponentComponent } from '../../component/Dashboardcomponent/latest-onboarding-table-component/latest-onboarding-table-component.component';
import { SmallscreenNavService } from '../../service/smallscreen-nav.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    LucideAngularModule,
    FunnelChartComponent,
    TrendChartComponentComponent,
    LatestOnboardingTableComponentComponent,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
// export class DashboardComponent implements OnInit, OnDestroy {
export class DashboardComponent implements OnInit {
  name = JSON.parse(localStorage.getItem('user') || '{}');

  readonly MoveUp = MoveUp;
  readonly MoveDown = MoveDown;
  readonly LogOut = LogOut;
  readonly LayoutDashboard = LayoutDashboard;
  readonly Users = Users;
  readonly Settings = Settings;

  onbordingServiceInstance: OnboardingserviceService = inject(
    OnboardingserviceService
  );

  totalonboardingsdata = 0;
  dropOffPercentagedata = 0;
  avgApprovalTimedata = 0;
  kycFailureCountdata = 0;

  constructor(private router: Router) {
    this.fetchKpiData();
  }

  async fetchKpiData() {
    this.totalonboardingsdata =
      await this.onbordingServiceInstance.totalOnboarding();
    this.dropOffPercentagedata =
      await this.onbordingServiceInstance.getDropOffPercentage();
    this.avgApprovalTimedata =
      await this.onbordingServiceInstance.getAvgApprovaltime();
    this.kycFailureCountdata =
      await this.onbordingServiceInstance.kycfailures();
  }
  navigateDashboard() {
    this.router.navigate(['/layout/dashboard']);
  }

  navigateCustomers() {
    this.router.navigate(['/layout/customer']);
  }

  navigateSettings() {
    this.router.navigate(['/layout/setting']);
  }

  navigateLoginpage() {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      this.router.navigate(['/login']);
    }
  }

  data: SmallscreenNavService = inject(SmallscreenNavService);

  message: boolean = false;

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
      console.log('This is the message received by the header: ', this.message);
    });
  }
}
