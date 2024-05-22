import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) {}

  login() {
    sessionStorage.setItem('auth', JSON.stringify(true));
    this.authService.emitAuthStatus(true);
  }

  logout() {
    sessionStorage.removeItem('auth');
    this.authService.emitAuthStatus(false);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
