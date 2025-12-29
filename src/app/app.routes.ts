import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/public/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./features/public/services/services.component').then(m => m.ServicesComponent) 
  },
  { 
    path: 'faqs', 
    loadComponent: () => import('./features/public/faqs/faqs.component').then(m => m.FaqsComponent) 
  },
  { 
    path: 'quote', 
    loadComponent: () => import('./features/public/quote/quote.component').then(m => m.QuoteComponent) 
  },
  { 
    path: 'book', 
    loadComponent: () => import('./features/public/book/book.component').then(m => m.BookComponent) 
  },
  { 
    path: 'auth/login', 
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'auth/register', 
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
