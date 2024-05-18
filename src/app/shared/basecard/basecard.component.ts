import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecard',
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.css']
})
export class BasecardComponent implements OnInit {

  @Input() data:any;

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
  }

  openModal(data:any):void{
    this.modalService.$modal.emit(true);
    this.modalService.$dataModal.emit(data);
    console.log(data)
  }

}
