import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authorized = new EventEmitter<any>();
  /* authIs:boolean = false; */

constructor() { }

  saveInStorage(){
   
  }

}
