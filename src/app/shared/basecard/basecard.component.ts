import { Component, Input, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecard',
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.css'],
})
export class BasecardComponent implements OnInit {
  @Input() data!: Basecard;

  @Input() canAdd: boolean = true;

  constructor(
    private modalService: ModalService,
    private basecardService: BasecardService
  ) {}

  ngOnInit(): void {}

  openModal(): void {
    this.modalService.$modal.emit(true);
    this.modalService.setDataModal(this.data);
  }

  useCard(): void {
    this.basecardService.setBaseCardId(this.data.id);
  }
}
