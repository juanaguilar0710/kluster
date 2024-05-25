import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor() {}

  emitAuthStatus(status: boolean) {
    this.authSubject.next(status);
  }

  get authStatus$() {
    return this.authSubject.asObservable();
  }

  isLoggedIn(): boolean {
    const auth = sessionStorage.getItem('auth');
    return auth !== null && JSON.parse(auth) === true;
  }

}
