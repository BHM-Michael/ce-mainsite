import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <span class="pill">21+ Scheduling</span>
          <span class="dot">•</span>
          <span>Discreet booking</span>
          <span class="dot">•</span>
          <span>Professional standards</span>
        </div>
        <div class="topbar-right">
          <a href="tel:+15551234567">(555) 123-4567</a>
          <span class="dot">•</span>
          <a href="mailto:cleanencountersaz@gmail.com">cleanencountersaz@gmail.com</a>
        </div>
      </div>
    </div>
    <header class="header">
      <div class="container header-inner">
<a class="brand" routerLink="/">
  <img src="assets/ce_logo.jpg" alt="Clean Encounters" class="brand-logo" />
  <span class="brand-text">
    <span class="brand-name">Clean Encounters</span>
    <span class="brand-tag">LUXURY CLEANING SERVICES</span>
  </span>
</a>
        <nav>
          <a routerLink="/services">Services</a>
          <a routerLink="/about">About</a>
          <a routerLink="/faqs">FAQs</a>
        </nav>
        <div class="cta">
          <a class="btn btn--outline" routerLink="/quote">Request a Private Quote</a>
          <a class="btn btn--gold" routerLink="/book">Book a Consultation</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .topbar {
      background: #1a1a1a;
      color: rgba(255,255,255,0.7);
      font-size: 0.75rem;
      padding: 0.5rem 0;
    }
    .topbar-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .topbar-left, .topbar-right {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .topbar a {
      color: rgba(255,255,255,0.7);
      text-decoration: none;
    }
    .topbar a:hover { color: #fff; }
    .dot { color: rgba(255,255,255,0.3); }
    .pill {
      background: #c9a962;
      color: #1a1a1a;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-weight: 500;
    }

    .header {
      background: #1a1a1a;
      padding: 0.75rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .brand-logo {
      height: 60px;
      width: auto;
    }

    nav {
      display: flex;
      gap: 2rem;
    }
    nav a {
      font-size: 0.875rem;
      text-decoration: none;
      color: rgba(255,255,255,0.8);
    }
    nav a:hover { color: #c9a962; }

    .cta {
      display: flex;
      gap: 0.75rem;
    }
    .btn {
      padding: 0.75rem 1.25rem;
      font-size: 0.8rem;
      font-weight: 500;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
    }
    .btn--outline {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: #fff;
    }
    .btn--outline:hover {
      border-color: #fff;
    }
    .btn--gold {
      background: #c9a962;
      color: #1a1a1a;
      border: none;
    }
    .btn--gold:hover {
      background: #b8954f;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    @media (max-width: 1024px) {
      .topbar-left { display: none; }
      nav { display: none; }
      .cta { display: none; }
    }

    .brand-text {
  display: flex;
  flex-direction: column;
}
.brand-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  color: #fff;
}
.brand-tag {
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.5);
}
  `]
})
export class HeaderComponent {
  auth = inject(AuthService);
}