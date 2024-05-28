import { EventEmitter, Injectable } from '@angular/core';
import { Basecard } from './interface/basecard';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  $modal = new EventEmitter<any>();
  $loginModal = new EventEmitter<any>();
  $dataModal= new EventEmitter<Basecard>();
  $basecardlistModal= new EventEmitter<any>();
  $featureListModal= new EventEmitter<any>();
  
  modalDataDetail!:Basecard;
  constructor() { }

  setDataModal(data: Basecard): void {
    this.modalDataDetail = data;
    this.$dataModal.emit(data);
  }
  getDataModal(): Basecard {
    return this.modalDataDetail;
  }
}
