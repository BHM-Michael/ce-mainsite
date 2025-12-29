import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      name: 'The Private Reset',
      tag: 'Most booked',
      price: 'From $150',
      duration: '2-3 hours',
      description: 'A full-home refresh focused on kitchens, bathrooms, floors, and high-touch areas.',
      features: [
        'Visible buildup addressed',
        'High-touch sanitizing',
        'Finishing details',
        'Light laundry and dishes',
        'General tidying'
      ]
    },
    {
      name: 'White-Glove Deep Clean',
      tag: 'Detail heavy',
      price: 'From $250',
      duration: '3-4 hours',
      description: 'For homes that need a true reset: baseboards, fan blades, fixtures, fronts of cabinets, and more.',
      features: [
        'Edges & baseboards',
        'Kitchen detail focus',
        'Bathroom precision',
        'Fan blades and fixtures',
        'Cabinet fronts'
      ]
    },
    {
      name: 'Move-In / Move-Out',
      tag: 'Inspection ready',
      price: 'From $300',
      duration: '4-5 hours',
      description: 'Designed for turnover and inspections: thorough surfaces, buildup, and finishing polish.',
      features: [
        'Empty-home efficiency',
        'Cabinet fronts & edges',
        'Bathrooms + kitchen',
        'Window sills',
        'Inspection ready'
      ]
    },
    {
      name: 'Executive Maintenance',
      tag: 'Recurring',
      price: 'From $125/visit',
      duration: '1.5-2 hours',
      description: 'Weekly or biweekly upkeep for clients who want it handled quietly, correctly, every time.',
      features: [
        'Recurring schedule',
        'Priority booking',
        'Consistent team',
        'Light domestic tasks',
        'Flexible scheduling'
      ]
    }
  ];
}
