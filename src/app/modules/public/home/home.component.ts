import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/**
 * HomeComponent is responsible for managing the home view, including modal visibility
 * and the ability to continue based on the state of the base card selection.
 */
export class HomeComponent implements OnInit {

  modalIs:boolean = false;
  canContinue:boolean =false
 
   /**
   * Constructor initializes the ModalService and BasecardService.
   * @param modalService - service to manage modal state
   * @param baseCardService - service to manage base card state
   */
  constructor( private modalService:ModalService, private baseCardService: BasecardService) { }

  /**
   * OnInit lifecycle hook to subscribe to modal visibility and base card ID changes.
   */
  ngOnInit(): void {
    // Subscribe to modal visibility changes
    this.modalService.$modal.subscribe((res)=>{ this.modalIs = res})
    // Subscribe to base card ID changes  
    this.baseCardService.baseCardId$.subscribe((id: number | null) => {
      this.canContinue = id !== null;
    });
  }
  
}
