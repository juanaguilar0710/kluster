import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  $modal = new EventEmitter<any>();
  $loginModal = new EventEmitter<any>();
  $dataModal= new EventEmitter<any>();

  constructor() { }
}
