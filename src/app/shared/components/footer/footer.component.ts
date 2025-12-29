import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <div class="brand"><span class="mark">CE</span> Clean Encounters</div>
        <p>Tucson • Oro Valley • Marana</p>
        <p class="legal">© {{ year }} Clean Encounters. 21+ scheduling. Professional cleaning services.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: #1a1a1a; color: #fff; padding: 3rem 0 1.5rem; text-align: center; }
    .brand { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
    .mark { background: #c9a962; color: #1a1a1a; padding: 0.4rem 0.6rem; border-radius: 4px; }
    p { color: rgba(255,255,255,0.6); font-size: 0.875rem; margin: 0.5rem 0; }
    .legal { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem; }
  `]
})
export class FooterComponent { year = new Date().getFullYear(); }
