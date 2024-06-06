import { Component, Input, OnInit } from '@angular/core';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecardselected',
  templateUrl: './basecardselected.component.html',
  styleUrls: ['./basecardselected.component.css']
})
export class BasecardselectedComponent implements OnInit {
  @Input() data!: Basecard;
  basecardIsSelected:boolean =true

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {

  }
  openModal(): void {
    this.modalService.$modal.emit(true);
    this.modalService.setDataModal(this.data);
  }


}
