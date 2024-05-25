import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalIs:boolean = false;
  loginModalIs:boolean = false;
  canContinue:boolean =false

  constructor( private modalService:ModalService, private baseCardService: BasecardService) { }

  ngOnInit(): void {
    this.modalService.$modal.subscribe((res)=>{ this.modalIs = res})
    this.modalService.$loginModal.subscribe((res)=>{ this.loginModalIs = res})

    this.baseCardService.baseCardId$.subscribe((id: number | null) => {
      this.canContinue = id !== null;
    });
  }

}
