import { Component, Inject, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
/**
 * component manages the navigation bar, allowing users navigate to the home page, and toggle the menu
 */
export class NavbarComponent implements OnInit {
  
  isAuthorized: boolean = false;
  private authSubscription!: Subscription;
  menuIs:boolean =false;

  constructor(
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

/**
 * Navigates to the home page.
 */
  goToHome() {
    this.router.navigate(['']);
  }

  /**
   * Toggles the menu.
   * for the mobile sizes..
   */
  openMenu(){
      this.menuIs = !this.menuIs;
  }
}
