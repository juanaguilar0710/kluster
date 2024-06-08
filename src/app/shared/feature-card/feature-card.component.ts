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
    // Subscribes to changes in selected features
    this.featureService.selectedFeatures$.subscribe((features: Feature[]) => {
      this.featuresSelected = features;
      this.featureIsSelected = this.validateIsSelected();// Checks if the current feature is selected
    });
  }

  /**
   * Opens the modal for feature list selection.
   */
  openModal(){
    this.modalService.$featureListModal.emit(false)
  }

  /**
   * Adds the selected feature to the list of features.
   * @param feature The feature to add.
   */
  addFeature(feature:Feature): void {
    // Emits event indicating feature addition
      this.featureService.addFeatureToList(feature);
      this.added.emit(true)
    
  }

/**
   * Checks if the feature is selected.
   * @returns True if the feature is selected, otherwise false.
   */
  validateIsSelected(): boolean {
    return this.featuresSelected.some(feature => feature.id === this.data.id);
  }
/**
   * Removes the current feature from the list of features.
   */
  removeThisFeature(){
     // Emits event indicating feature removal
    this.featureService.removeFeatureFromList(this.data);
    this.removed.emit(true);
  }

  
}
