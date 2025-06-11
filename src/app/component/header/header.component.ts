import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LucideAngularModule } from 'lucide-angular';
import { Menu, User, X } from 'lucide-angular';
import { SmallscreenNavService } from '../../service/smallscreen-nav.service';
@Component({
  selector: 'app-header',
  imports: [CommonModule, ThemeToggleComponent, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  readonly Menu = Menu;
  readonly User = User;
  readonly X = X;

  data: SmallscreenNavService = inject(SmallscreenNavService); //creating an instance of the service

  message: boolean = false;

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }

  public toggleMenu() {
    this.message = !this.message;
    console.log('the value the header is sending: ', this.message);
    this.data.changeMessage(this.message);
  }
}
