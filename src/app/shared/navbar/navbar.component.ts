import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { ModalService } from 'src/services/modal.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/loginService/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isAuthorized: boolean = false;
  private authSubscription!: Subscription;

  constructor(
    private modalService: ModalService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthorized = isLoggedIn;
    }, error => {
      console.error(error);
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  openLogin() {
    this.modalService.$loginModal.emit(true);
  }

  goToHome() {
    this.router.navigate(['']);
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }
}
