import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-inner">
        <div class="copy">
          <h1>Private, elevated home cleaning<br><span class="accent">for clients who value discretion.</span></h1>
          <p class="lead">Calm, professional service — designed for privacy-minded households.<br>White-glove standards. Quiet efficiency. No awkwardness.</p>
          <div class="buttons">
            <a class="btn btn--outline" routerLink="/quote">Request a Private Quote</a>
            <a class="btn btn--white" routerLink="/services">Explore Services</a>
          </div>
          <div class="trust-badges">
            <span>Background-checked team</span>
            <span>Private scheduling</span>
            <span>On-time arrival windows</span>
          </div>
        </div>
        <div class="card">
          <div class="card-kicker">NEXT AVAILABLE CONSULTS</div>
          <h3>Limited weekly openings</h3>
          <p>Share your home size + service goal and we'll reply with options and a private estimate.</p>
          <form>
            <label class="field"><span>Name</span><input type="text" placeholder="Your name" /></label>
            <label class="field"><span>City</span><input type="text" placeholder="Tucson / Oro Valley / Marana" /></label>
            <label class="field"><span>Square footage</span><input type="text" placeholder="e.g., 2050" /></label>
            <label class="field">
              <span>Preferred service</span>
              <select>
                <option>The Private Reset</option>
                <option>White-Glove Deep Clean</option>
                <option>Move-In / Move-Out</option>
                <option>Executive Maintenance</option>
              </select>
            </label>
            <button class="btn btn--gold" type="button">Request a Private Quote</button>
            <p class="fine-print">21+ scheduling only. We provide professional cleaning services.</p>
          </form>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <h2>Luxury cleaning, without the noise.</h2>
        <p class="section-sub">You're not hiring "just a cleaner." You're booking a controlled, high-standard service built around discretion, consistency, and detail.</p>
        <div class="features">
          <div class="feature">
            <div class="feature-icon">✓</div>
            <div>
              <h4>Discretion</h4>
              <p>Confidential scheduling, quiet professionalism, and a polished presence.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">✓</div>
            <div>
              <h4>Detail</h4>
              <p>We focus on what most companies rush past — buildup, edges, and finishing touches.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">✓</div>
            <div>
              <h4>Consistency</h4>
              <p>Same standard every visit — no chaos, no surprises, no cut corners.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">✓</div>
            <div>
              <h4>Executive Maintenance</h4>
              <p>Weekly / biweekly upkeep for households that don't do "behind schedule."</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <h2>Signature service options</h2>
        <p class="section-sub">Choose your level. We'll tailor the scope after a quick private consult.</p>
        <div class="services">
          <div class="service-card">
            <div class="service-header">
              <h4>The Private Reset</h4>
              <span class="tag">Most booked</span>
            </div>
            <p>A full-home refresh focused on kitchens, bathrooms, floors, and high-touch areas.</p>
            <ul>
              <li>Visible buildup addressed</li>
              <li>High-touch sanitizing</li>
              <li>Finishing details</li>
            </ul>
            <a class="service-link" routerLink="/quote">Request pricing →</a>
          </div>
          <div class="service-card">
            <div class="service-header">
              <h4>White-Glove Deep Clean</h4>
              <span class="tag">Detail heavy</span>
            </div>
            <p>For homes that need a true reset: baseboards, fan blades, fixtures, fronts of cabinets.</p>
            <ul>
              <li>Edges & baseboards</li>
              <li>Kitchen detail focus</li>
              <li>Bathroom precision</li>
            </ul>
            <a class="service-link" routerLink="/quote">Book a consult →</a>
          </div>
          <div class="service-card">
            <div class="service-header">
              <h4>Move-In / Move-Out</h4>
              <span class="tag">Inspection ready</span>
            </div>
            <p>Designed for turnover and inspections: thorough surfaces, buildup, and finishing polish.</p>
            <ul>
              <li>Empty-home efficiency</li>
              <li>Cabinet fronts & edges</li>
              <li>Bathrooms + kitchen</li>
            </ul>
            <a class="service-link" routerLink="/quote">Get availability →</a>
          </div>
          <div class="service-card">
            <div class="service-header">
              <h4>Executive Maintenance</h4>
              <span class="tag">Recurring</span>
            </div>
            <p>Weekly / biweekly upkeep for clients who want it handled — quietly, correctly, every time.</p>
            <ul>
              <li>Recurring schedule</li>
              <li>Priority booking</li>
              <li>Consistent team</li>
            </ul>
            <a class="service-link" routerLink="/quote">Start recurring →</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container">
        <h2>Clients come for the calm.</h2>
        <p class="section-sub">High standards, zero awkwardness, and a home that feels reset.</p>
        <div class="testimonials">
          <div class="testimonial">
            <blockquote>"Everything felt calm and professional — and my home looked perfect."</blockquote>
            <cite>Client, Tucson</cite>
          </div>
          <div class="testimonial">
            <blockquote>"Exactly what I wanted. Quiet, efficient, and the details were unreal."</blockquote>
            <cite>Client, Oro Valley</cite>
          </div>
          <div class="testimonial">
            <blockquote>"This is the first service I've used that actually feels high-end."</blockquote>
            <cite>Client, Marana</cite>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container cta-inner">
        <div>
          <h3>Ready for a private, luxury-level clean?</h3>
          <p>Request your consult and we'll send available dates.</p>
        </div>
        <a class="btn btn--gold" routerLink="/quote">Request a Private Quote</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
      padding: 4rem 0;
      color: #fff;
    }
    .hero-inner {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 4rem;
      align-items: start;
    }
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3rem;
      font-weight: 400;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    .accent { color: #c9a962; }
    .lead {
      color: rgba(255,255,255,0.7);
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    .buttons { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .btn {
      padding: 0.875rem 1.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      border: none;
    }
    .btn--outline {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: #fff;
    }
    .btn--outline:hover { border-color: #fff; }
    .btn--white {
      background: #fff;
      color: #1a1a1a;
    }
    .btn--gold {
      background: #c9a962;
      color: #1a1a1a;
      width: 100%;
      padding: 1rem;
    }
    .btn--gold:hover { background: #b8954f; }
    .trust-badges {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .trust-badges span {
      padding: 0.5rem 1rem;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 4px;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.7);
    }

    .card {
      background: #2d2d2d;
      border-radius: 8px;
      padding: 2rem;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .card-kicker {
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      color: #c9a962;
      margin-bottom: 0.5rem;
    }
    .card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 0.75rem;
      color: #fff;
    }
    .card > p {
      color: rgba(255,255,255,0.6);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }
    .field span {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
    }
    .field input, .field select {
      padding: 0.75rem;
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      color: #fff;
      font-size: 0.9rem;
    }
    .field input::placeholder { color: rgba(255,255,255,0.3); }
    .field select option { background: #1a1a1a; }
    .fine-print {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.4);
      text-align: center;
      margin-top: 1rem;
    }

    .section { padding: 5rem 0; }
    .section--dark {
      background: #1a1a1a;
      color: #fff;
    }
    .section h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.25rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    .section-sub {
      color: rgba(255,255,255,0.6);
      max-width: 600px;
      margin-bottom: 3rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .feature {
      display: flex;
      gap: 1rem;
    }
    .feature-icon {
      width: 32px;
      height: 32px;
      background: #c9a962;
      color: #1a1a1a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .feature h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }
    .feature p {
      color: rgba(255,255,255,0.6);
      font-size: 0.9rem;
    }

    .services {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    .service-card {
      background: #2d2d2d;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 1.5rem;
    }
    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
    }
    .service-card h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.2rem;
      font-weight: 400;
      color: #fff;
    }
    .tag {
      font-size: 0.65rem;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
      color: rgba(255,255,255,0.6);
    }
    .service-card > p {
      color: rgba(255,255,255,0.6);
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
    .service-card ul {
      list-style: none;
      padding: 0;
      margin-bottom: 1rem;
    }
    .service-card li {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.5);
      padding-left: 1.25rem;
      position: relative;
      margin-bottom: 0.5rem;
    }
    .service-card li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #c9a962;
    }
    .service-link {
      color: #c9a962;
      font-size: 0.875rem;
      text-decoration: none;
    }
    .service-link:hover { text-decoration: underline; }

    .testimonials {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .testimonial {
      background: #2d2d2d;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 1.5rem;
    }
    .testimonial blockquote {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      font-style: italic;
      color: #fff;
      margin-bottom: 1rem;
    }
    .testimonial cite {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.5);
      font-style: normal;
    }

    .cta-section {
      background: #2d2d2d;
      padding: 3rem 0;
    }
    .cta-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cta-inner h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      color: #fff;
      margin-bottom: 0.25rem;
    }
    .cta-inner p {
      color: rgba(255,255,255,0.6);
    }
    .cta-inner .btn--gold {
      width: auto;
      padding: 1rem 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    @media (max-width: 1024px) {
      .hero-inner { grid-template-columns: 1fr; }
      .services { grid-template-columns: repeat(2, 1fr); }
      .testimonials { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      h1 { font-size: 2.25rem; }
      .features { grid-template-columns: 1fr; }
      .services { grid-template-columns: 1fr; }
      .cta-inner { flex-direction: column; text-align: center; gap: 1.5rem; }
    }
  `]
})
export class HomeComponent { }