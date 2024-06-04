import { Component, Inject, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isAuthorized: boolean = false;
  private authSubscription!: Subscription;
  menuIs:boolean =false;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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

  openMenu(){
      this.menuIs = !this.menuIs;
      console.log(this.menuIs)
  }
}
