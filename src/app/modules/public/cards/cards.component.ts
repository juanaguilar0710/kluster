import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
/**
 * CardsComponent is responsible for displaying and filtering a list of basecards.
 * It fetches basecards from the BasecardService and allows filtering by category and search input.
 */
export class CardsComponent implements OnInit {

  data: Basecard[] = []; //The list of all basecards fetched from the service
  selectedCategory:string = ''; //The selected category to filter the basecards
  categories:any[] =[]; //The list of unique categories derived from the basecards
  filteredData:Basecard[]=[]; //The list of filtered basecards
  searchInput:string=''; //The search input for filtering basecards by name


  /**
   * Constructor initializes the BasecardService
   * @param basecardService - service to fetch and filter basecards
   */
  constructor(private basecardService: BasecardService) { }


  /**
   * OnInit lifecycle hook to fetch basecards and categories on component initialization.
   */
  ngOnInit(): void {
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });
    this.categories= this.getUniqueCategories(this.data);
  }

  /**
   * Filters basecards based on the selected category.
   * @param event - the event triggered by changing the category selection
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
   * Retrieves unique categories from the list of basecards.
   * @param cards - the list of basecards
   * @returns an array of unique categories
   */
  getUniqueCategories(cards: Basecard[]): String[] {
    const categories = cards.map(card => card.category);
    return [...new Set(categories)];
  }

  /**
   * Fetches all basecards from the service.
   */
  getAllBasecards(){
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });

  }

  /**
   * Filters basecards by the search input.
   * If the search input is empty, it fetches all basecards.
   */
  filterFeaturesByName(): void {
    if (this.searchInput.trim() !== '') {
      this.basecardService.filterFeaturesByName(this.searchInput).subscribe(filteredBasecard => {
        this.data = filteredBasecard;
      },error=>{
        console.error(error)
      });
    } else {
      this.getAllBasecards();
    }
  }
}
