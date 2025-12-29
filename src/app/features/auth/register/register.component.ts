import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    ageConfirm: false
  };

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit() {
    this.errorMessage = '';

    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;

    const payload = {
      firstName: this.registerForm.firstName,
      lastName: this.registerForm.lastName,
      email: this.registerForm.email,
      phone: this.registerForm.phone,
      password: this.registerForm.password
    };

    this.http.post<any>(`${environment.apiUrl}/auth/register`, payload)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.successMessage = 'Account created successfully! Redirecting...';
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 2000);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        }
      });
  }

  validateForm(): boolean {
    if (!this.registerForm.firstName || !this.registerForm.lastName) {
      this.errorMessage = 'Please enter your full name.';
      return false;
    }

    if (!this.registerForm.email) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    if (!this.registerForm.phone) {
      this.errorMessage = 'Please enter your phone number.';
      return false;
    }

    if (this.registerForm.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters.';
      return false;
    }

    if (this.registerForm.password !== this.registerForm.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return false;
    }

    if (!this.registerForm.ageConfirm) {
      this.errorMessage = 'You must confirm you are 21 or older.';
      return false;
    }

    if (!this.registerForm.agreeTerms) {
      this.errorMessage = 'You must agree to the terms and conditions.';
      return false;
    }

    return true;
  }
}
