import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  readonly LayoutDashboard = LayoutDashboard;
  readonly Users = Users;
  readonly Settings = Settings;
  readonly LogOut = LogOut;

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
}
