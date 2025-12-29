import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  currentStep = 1;
  isLoggedIn = false;

  bookingForm = {
    service: '',
    date: '',
    time: '',
    zipCode: '',
    address: '',
    squareFootage: '',
    notes: ''
  };

  zipCodes = [
    { code: '85701', area: 'Downtown Tucson' },
    { code: '85704', area: 'Flowing Wells' },
    { code: '85705', area: 'Amphi / Prince' },
    { code: '85710', area: 'East Tucson' },
    { code: '85711', area: 'Midtown' },
    { code: '85712', area: 'Central Tucson' },
    { code: '85715', area: 'East Tucson' },
    { code: '85718', area: 'Catalina Foothills' },
    { code: '85719', area: 'University Area' },
    { code: '85737', area: 'Oro Valley' },
    { code: '85739', area: 'Catalina' },
    { code: '85741', area: 'Marana' },
    { code: '85742', area: 'Marana' },
    { code: '85743', area: 'Tucson Mountains' },
    { code: '85745', area: 'West Tucson' },
    { code: '85750', area: 'Sabino Canyon' },
    { code: '85755', area: 'Oro Valley' }
  ];

  services = [
    { id: 'private-reset', name: 'The Private Reset', price: 150, duration: '2-3 hours' },
    { id: 'deep-clean', name: 'White-Glove Deep Clean', price: 250, duration: '3-4 hours' },
    { id: 'move-in-out', name: 'Move-In / Move-Out', price: 300, duration: '4-5 hours' },
    { id: 'executive', name: 'Executive Maintenance', price: 125, duration: '1.5-2 hours' }
  ];

  availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  getSelectedService() {
    return this.services.find(s => s.id === this.bookingForm.service);
  }

  getMinDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.bookingForm.service;
      case 2:
        return !!this.bookingForm.date && !!this.bookingForm.time && !!this.bookingForm.zipCode;
      default:
        return true;
    }
  }

  onSubmit() {
    if (!this.isLoggedIn) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: '/book' } });
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    this.http.post(`${environment.apiUrl}/bookings`, this.bookingForm)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
        },
        error: (err) => {
          this.isSubmitting = false;
          this.submitError = 'Something went wrong. Please try again.';
        }
      });
  }
}
