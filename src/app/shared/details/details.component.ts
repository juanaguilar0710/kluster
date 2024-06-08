import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { ModalService } from 'src/services/modal.service';
import { Subscription } from 'rxjs';
import { Basecard, Feature } from 'src/services/interface/basecard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
/**
 * DetailsComponent is responsible for displaying the details of a selected base card in a modal dialog
 */
export class DetailsComponent implements OnInit {

  displayedColumns: string[] = [ 'Feature', 'Cost'];
  dataSource!:Feature[];

  baseData!:Basecard;

  constructor(private modalService:ModalService,
    private basecardService: BasecardService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.baseData = this.modalService.getDataModal()// Retrieve data from the modal service
  this.dataSource= this.baseData.features// Set the data source for the table to the features of the base card
    
  }
   /**
   * Closes the modal. emits a Boolean value that is heard by the modalService
   */
  closeModal(){
    this.modalService.$modal.emit(false)
  }


  /**
   * Sets the selected base card and navigates to the new build page.
   */
  useBase(): void {
    this.router.navigate(['/newbuild'])
    this.basecardService.setBaseCardId(this.baseData!.id);// Set the selected base card ID
    this.closeModal()
  }

  
}
