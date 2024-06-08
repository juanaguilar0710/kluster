import { EventEmitter, Injectable } from '@angular/core';
import { Basecard } from './interface/basecard';

@Injectable({
  providedIn: 'root'
})
/**
 * ModalService manages the communication between components and modal dialogs.
 */
export class ModalService {

  // Event emitters for various modal dialogs
  $modal = new EventEmitter<any>();               // Generic modal
  $loginModal = new EventEmitter<any>();          // Login modal
  $dataModal= new EventEmitter<Basecard>();       // Data modal for Basecard details
  $basecardlistModal= new EventEmitter<any>();    // Modal for base card list
  $featureListModal= new EventEmitter<any>();     // Modal for feature list
  
  modalDataDetail!: Basecard;   // Data for modal dialog

  constructor() { }

  /**
   * Sets the data for the modal dialog.
   * @param data Data to be displayed in the modal dialog
   */
  setDataModal(data: Basecard): void {
    this.modalDataDetail = data;
    this.$dataModal.emit(data);   // Emit data to subscribers
  }

  /**
   * Retrieves the data for the modal dialog.
   * @returns The data for the modal dialog
   */
  getDataModal(): Basecard {
    return this.modalDataDetail;
  }
}
