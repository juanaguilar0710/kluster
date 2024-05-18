import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(private modalService:ModalService, private authServie:AuthService) { }

  ngOnInit(): void {
  }
  
  closeModal(){
    this.modalService.$loginModal.emit(false)
  }

  singIn(){
    this.authServie.$authorized.emit(true);
    this.closeModal();
  }
}
