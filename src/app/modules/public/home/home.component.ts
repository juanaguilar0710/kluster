import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalIs:boolean = false;
  loginModalIs:boolean = false;

  constructor( private modalService:ModalService) { }

  ngOnInit(): void {
    this.modalService.$modal.subscribe((res)=>{ this.modalIs = res})
    this.modalService.$loginModal.subscribe((res)=>{ this.loginModalIs = res})
  }

}
