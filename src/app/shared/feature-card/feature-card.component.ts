import { Component, Input, OnInit } from '@angular/core';
import { FeatureService } from 'src/services/buildcards/feature.service';
import { Feature } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {
  @Input() data!:any;
  constructor(private modalService:ModalService, private featureService:FeatureService) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalService.$featureListModal.emit(false)
  }

  addFeature(feature:Feature): void {
    
      this.featureService.addFeatureToList(feature);
    
  }

  
}
