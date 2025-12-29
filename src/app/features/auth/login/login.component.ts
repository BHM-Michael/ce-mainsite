import { Component } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = {
    email: '',
    password: ''
  };

  isSubmitting = false;
  errorMessage = '';
  returnUrl = '/';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (!this.loginForm.email || !this.loginForm.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.authService.login(this.loginForm.email, this.loginForm.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl(this.returnUrl);
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
  }
}
