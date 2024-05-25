import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private authService: AuthService) {}

  login() {
    sessionStorage.setItem('auth', JSON.stringify(true));
    this.authService.emitAuthStatus(true);
    this.isLoggedInSubject.next(true);
  }

  logout() {
    sessionStorage.removeItem('auth');
    this.authService.emitAuthStatus(false);
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Manejo de errores
  handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong');
  }

}
