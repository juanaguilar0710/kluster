import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { ModalService } from 'src/services/modal.service';
import { Subscription } from 'rxjs';
import { Basecard, Feature } from 'src/services/interface/basecard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  displayedColumns: string[] = [ 'Feature', 'Cost'];
  dataSource!:Feature[];

  baseData!:Basecard;

  constructor(private modalService:ModalService,
    private basecardService: BasecardService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.baseData = this.modalService.getDataModal()


    this.dataSource= this.baseData.features
    
  }
  closeModal(){
    this.modalService.$modal.emit(false)
  }

  useBase(): void {
    this.router.navigate(['/newbuild'])
    this.basecardService.setBaseCardId(this.baseData!.id);
    this.closeModal()
  }

  
}
