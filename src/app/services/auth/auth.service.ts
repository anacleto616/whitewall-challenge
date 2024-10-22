import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router)

  logout() {
    localStorage.removeItem('apiKey');
    this.router.navigate(['/login']);
  }
}
