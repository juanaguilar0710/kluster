import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data: Basecard[] = [];
  selectedCategory:string = ''
  categories:any[] =[]
  filteredData:Basecard[]=[]
  searchInput:string='';


  constructor(private basecardService: BasecardService) { }

  ngOnInit(): void {
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });
    this.categories= this.getUniqueCategories(this.data);
  }

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

  getUniqueCategories(cards: Basecard[]): String[] {
    const categories = cards.map(card => card.category);
    return [...new Set(categories)];
  }
  getAllBasecards(){
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });

  }
  filterFeaturesByName(): void {
    if (this.searchInput.trim() !== '') {
      this.basecardService.filterFeaturesByName(this.searchInput).subscribe(filteredBasecard => {
        this.data = filteredBasecard;
      });
    } else {
      this.getAllBasecards();
    }
  }
}
