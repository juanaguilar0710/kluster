import { Component, Input, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecard',
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.css'],
})

/**
 * The BasecardComponent is responsible for displaying individual basecards 
 * within the application interface and managing user interactions related 
 * to these cards. It provides functionalities for selecting, deselecting, 
 * and interacting with basecards, such as opening modals with detailed information 
 * about a basecard.
 */
export class BasecardComponent implements OnInit {
  @Input() data!: Basecard;  // Input property to receive the basecard data
  @Input() canAdd: boolean = true;  // Input property to control if the basecard can be added

  basecardIsSelected: boolean = true;  // State to track if the basecard is currently selected

  constructor(
    private modalService: ModalService,  // Service to manage modals
    private basecardService: BasecardService  // Service to manage basecards
  ) {}

  ngOnInit(): void {
    this.checkIsSelected();  // Check if the basecard is selected when the component initializes
  }
/**
   * Opens the modal and sets the data for the modal.
   */
  openModal(): void {
    this.modalService.$modal.emit(true);
    this.modalService.setDataModal(this.data);
  }
/**
   * Sets the current basecard as the selected basecard.
   */
  useCard(): void {
    this.basecardService.setBaseCardId(this.data.id);
    this.checkIsSelected()
  }

  /**
   * Checks if the current basecard is selected by subscribing to the baseCardId$ observable.
   */
  checkIsSelected():void{
    this.basecardService.baseCardId$.subscribe(basecardId => {
      if (basecardId !== null) {
        if(basecardId === this.data.id){
          this.basecardIsSelected =true;
          this.canAdd =false
          return
        }else{
          this.basecardIsSelected = false;
          this.canAdd =true
          return
        }
      } else {
        this.basecardIsSelected = false;
        this.canAdd =true
      }
    }, error => {
      console.error('Error fetching basecard ID:', error);
    });
  }
  /**
   * Removes the current basecard from being selected.
   */
  removeThisBasecard(){
    this.basecardService.setBaseCardId(null);
    this.basecardIsSelected =false;
    this.canAdd =true
  }
}
