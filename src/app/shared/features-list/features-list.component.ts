import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { FeatureService } from 'src/services/buildcards/feature.service';
import { Basecard, Feature } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.css']
})
/**
 * 
 * This component manages the list of features, 
 * allowing users to filter features by category, 
 * search by name or description, and display 
 * success or error messages. It retrieves feature 
 * data from a service and displays it in the UI
 */
export class FeaturesListComponent implements OnInit {

  featureData!: Feature[];
  filteredData: Feature[] = [];
  selectedCategory: String = '';
  categories: String[] = [];
  allBases:Basecard[]=[]


  messagesAddedIs:boolean = false;
  messagesRemoveIs:boolean = false;

  searchInput: string = '';

  constructor(private featureService: FeatureService, private modalService: ModalService, private basecardService:BasecardService) { }

  ngOnInit(): void {
    // Retrieves all features and categories
    this.getAllFeatures();
    this.categories= this.getUniqueCategories(this.featureData)

      // Retrieves all base cards
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.allBases=res
    }, error =>{
      console.error(error)
    })
  }
/**
   * Closes the modal.
   * Emits event indicating feature removal
   */
  closeModal(): void {
    this.modalService.$featureListModal.emit(false);
  }

  /**
   * Filters features by category.
   * @param event The event triggering the filter.
   */
  filterFeaturesByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    if(this.selectedCategory == 'all'){
      this.getAllFeatures()
      return;
    }
    if (this.selectedCategory) {
      this.featureService.getFaturesByCategory(this.selectedCategory).subscribe((res)=>{
        this.featureData=res
      },error=>{
        console.error(error)
      });
    } else {
      this.filteredData = this.featureData;
    }
  }

  /**
   * Retrieves unique categories from features.
   * @param features The list of features.
   * @returns An array of unique categories.
   */
  getUniqueCategories(features: Feature[]): string[] {
    const categories = features.map(feature => feature.category);
    return [...new Set(categories)];
  }

  /**
   * Resets feature data.
   */
  resetData(): void {
    this.getAllFeatures();
  }

  /**
   * Retrieves all features.
   */
  getAllFeatures(): void {
    this.featureService.getAllFeatures().subscribe((res) => {
      this.featureData = res;
    });
  }

  /**
   * Filters features by name or description.
   */

  filterFeaturesByNameOrDescription(): void {
    if (this.searchInput.trim() !== '') {
      this.featureService.filterFeaturesByNameOrDescription(this.searchInput).subscribe(filteredFeatures => {
        this.featureData = filteredFeatures;
      });
    } else {
      this.getAllFeatures();
    }
  }
  

  /**
   * Displays success or error message.
   * @param status The status of the message.
   * @param property The property to display the message for.
   */
  displayMessage(status:boolean, property:string):void{
    
    if(property=='add'){
      this.messagesRemoveIs = false;
      this.messagesAddedIs = status
      setTimeout(() => {
       this.messagesAddedIs = false;
    }, 1500);
    }else{
      this.messagesAddedIs = false;
      this.messagesRemoveIs = status
      setTimeout(() => {
       this.messagesRemoveIs = false;
    }, 1500);
    }
      
  }
 

}