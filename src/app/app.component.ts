import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from './feature/login-page/login-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onboarding-dashboard';
}
