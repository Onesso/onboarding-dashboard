import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LucideAngularModule } from 'lucide-angular';
import { Menu,User } from 'lucide-angular';
@Component({
  selector: 'app-header',
  imports: [ThemeToggleComponent, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly Menu = Menu;
  readonly User = User;
}
