import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface User { id: string; email: string; firstName: string; lastName: string; role: string; }
export interface AuthResponse { token: string; user: User; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = signal<User | null>(null);
  user = computed(() => this.currentUser());
  isLoggedIn = computed(() => !!this.currentUser());

  constructor(private http: HttpClient, private router: Router) {
    const stored = localStorage.getItem('ce_user');
    if (stored) this.currentUser.set(JSON.parse(stored));
  }

  getToken(): string | null { return localStorage.getItem('ce_token'); }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(tap(res => { localStorage.setItem('ce_token', res.token); localStorage.setItem('ce_user', JSON.stringify(res.user)); this.currentUser.set(res.user); }));
  }

  logout(): void { localStorage.clear(); this.currentUser.set(null); this.router.navigate(['/']); }
}
