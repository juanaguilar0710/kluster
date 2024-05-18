import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { ModalService } from 'src/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthorized:boolean =false;

  constructor(private modalService:ModalService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.$authorized.subscribe(res =>{
      this.isAuthorized = res
    })
  }

  openLogin(){
    this.modalService.$loginModal.emit(true);

  }
}
