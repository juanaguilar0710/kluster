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

  basecardIsSelected:boolean =true

  constructor(
    private modalService: ModalService,
    private basecardService: BasecardService
  ) {}

  ngOnInit(): void {
    this.checkIsSelected()
  }

  openModal(): void {
    this.modalService.$modal.emit(true);
    this.modalService.setDataModal(this.data);
  }

  useCard(): void {
    this.basecardService.setBaseCardId(this.data.id);
    this.checkIsSelected()
  }

  checkIsSelected():void{
    this.basecardService.baseCardId$.subscribe(basecardId => {
      if (basecardId !== null) {
        if(basecardId === this.data.id){
          this.basecardIsSelected =true;
          this.canAdd =false
          return
        }else{
          this.basecardIsSelected = false;
          this.canAdd =true
          return
        }
      } else {
        this.basecardIsSelected = false;
        this.canAdd =true
      }
    }, error => {
      console.error('Error fetching basecard ID:', error);
    });
  }
  removeThisBasecard(){
    this.basecardService.setBaseCardId(null);
    this.basecardIsSelected =false;
    this.canAdd =true
  }
}
