import { Component } from '@angular/core';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kloustr';

  modalIs:boolean = false;

  constructor(private modalService:ModalService){
    
  }

  ngOnInit(){
    this.modalService.$modal.subscribe((res)=>{ this.modalIs = res})
  }
}

