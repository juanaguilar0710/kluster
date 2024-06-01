import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() added = new EventEmitter<boolean>();
  @Output() removed = new EventEmitter<boolean>();
  featureIsSelected:boolean = false;
  featuresSelected:Feature [] = []

  constructor(private modalService:ModalService, private featureService:FeatureService) { }
  
  ngOnInit(): void {
    this.featureService.selectedFeatures$.subscribe((features: Feature[]) => {
      this.featuresSelected = features;
      this.featureIsSelected = this.validateIsSelected();
    });
  }

  openModal(){
    this.modalService.$featureListModal.emit(false)
  }

  addFeature(feature:Feature): void {
    
      this.featureService.addFeatureToList(feature);
      this.added.emit(true)
    
  }


  validateIsSelected(): boolean {
    return this.featuresSelected.some(feature => feature.id === this.data.id);
  }

  removeThisFeature(){
    this.featureService.removeFeatureFromList(this.data);
    this.removed.emit(true);
  }

  
}
