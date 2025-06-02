import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  private toast = inject(MatSnackBar);

  submitLoginForm() {
    if (this.loginForm.valid) {
      this.toast.open('Logged in successfull', 'Close', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
      this.loginForm.reset();
      this.router.navigate(['/layout/dashboard']);
    } else {
      this.toast.open('Wrong credentials', 'OK', {
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }

    console.log('Email: ', this.loginForm.value.email);
    console.log('password: ', this.loginForm.value.password);
  }
}
