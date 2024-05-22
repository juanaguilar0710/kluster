import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
import { LoginService } from 'src/services/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private modalService: ModalService,
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.modalService.$loginModal.emit(false);
  }

  signIn() {
    this.loginService.login(); // This will set session storage and notify AuthService
    this.closeModal();
  }
}
