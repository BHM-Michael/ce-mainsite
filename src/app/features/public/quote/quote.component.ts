import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  quoteForm = {
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    squareFootage: '',
    service: '',
    frequency: '',
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
    'The Private Reset',
    'White-Glove Deep Clean',
    'Move-In / Move-Out',
    'Executive Maintenance'
  ];

  frequencies = [
    'One-time service',
    'Weekly',
    'Bi-weekly',
    'Monthly'
  ];

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    // For now, just simulate success
    // Later connect to backend API
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
    }, 1500);

    // Uncomment when backend is ready:
    // this.http.post(`${environment.apiUrl}/quotes`, this.quoteForm)
    //   .subscribe({
    //     next: () => {
    //       this.isSubmitting = false;
    //       this.submitSuccess = true;
    //     },
    //     error: (err) => {
    //       this.isSubmitting = false;
    //       this.submitError = 'Something went wrong. Please try again.';
    //     }
    //   });
  }

  validateForm(): boolean {
    if (!this.quoteForm.name || !this.quoteForm.email || !this.quoteForm.phone || 
        !this.quoteForm.zipCode || !this.quoteForm.service) {
      this.submitError = 'Please fill in all required fields.';
      return false;
    }
    return true;
  }
}
