import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthorized:boolean =false;

  constructor(private modalService:ModalService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.$authorized.subscribe(res =>{
      this.isAuthorized = res
    })
  }

  openLogin(){
    this.modalService.$loginModal.emit(true);

  }
}
