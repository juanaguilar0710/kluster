import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecardlist',
  templateUrl: './basecardlist.component.html',
  styleUrls: ['./basecardlist.component.css']
})

/**
 * The BasecardlistComponent manages and displays a list of basecards in the application.
 * It provides functionalities for filtering basecards by category and resetting the displayed data.
 */
export class BasecardlistComponent implements OnInit {

  data: Basecard[] = [];
  filteredData: Basecard[] = [];
  selectedCategory: String = '';
  categories: String[] = [];
  canContinue: boolean = false;


  /**
   * Constructs a new instance of BasecardlistComponent.
   * @param modalService The service for managing modal operations.
   * @param basecardService The service for retrieving basecard data.
   */
  constructor(private modalService:ModalService,private basecardService: BasecardService) { }


  /** Initializes the component and fetches basecard data from services. */
  ngOnInit(): void {
    this.getAllBasecards()

    this.filteredData = this.data;
    this.categories = this.getUniqueCategories(this.data);

    // Subscribe to changes in the basecard ID to determine if the user can continue.
    this.basecardService.baseCardId$.subscribe((id: number | null) => {
      this.canContinue = id !== null;
    });
  }
  /** Closes the modal window for the basecard list. */
  closeModal(): void {
    this.modalService.$basecardlistModal.emit(false);
  }

  /**
   * Filters basecards based on the selected category.
   * @param event The event triggered by the category selection.
   */
  filterCardsByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    if(this.selectedCategory == 'all'){
      this.getAllBasecards()
      return;
    }
    if (this.selectedCategory) {
      this.basecardService.filterBaseCardsByCategory(this.selectedCategory).subscribe((res)=>{
        this.data=res
      },error=>{
        console.error(error)
      });
    } else {
      this.filteredData = this.data;
    }
  }

 /**
   * Extracts unique categories from the provided list of basecards.
   * @param cards The list of basecards.
   * @returns An array containing unique category values.
   */
  getUniqueCategories(cards: Basecard[]): String[] {
    const categories = cards.map(card => card.category);
    return [...new Set(categories)];
  }

  /** Resets the displayed basecard data to the original list. */
  resetData(){
    this.getAllBasecards()
  }

  /** Fetches all basecards from the service. */
  getAllBasecards(){
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });

  }
}
