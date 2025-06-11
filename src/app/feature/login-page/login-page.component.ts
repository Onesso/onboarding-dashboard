import { User } from 'lucide-angular';
import { AuthService } from './../../service/auth.service';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private router: Router) {}
  AuthServiceInstance: AuthService = inject(AuthService);

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  private toast = inject(MatSnackBar);

  submitLoginForm() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.AuthServiceInstance.loginUser(username as string).subscribe(
        (res) => {
          if (res.length > 0 && res[0].password === password) {
            this.toast.open('Logged in successfull', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });

            const User = this.loginForm.value;

            localStorage.setItem('user', JSON.stringify(User));

            this.router.navigate(['/layout/dashboard']);

            this.loginForm.reset();
          } else {
            this.toast.open('Wrong credentials', 'OK', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          }
        }
      );
    }
    console.log(this.loginForm.value);
  }
}
