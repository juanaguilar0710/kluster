import { Component, OnInit } from '@angular/core';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { Basecard } from 'src/services/interface/basecard';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-basecardlist',
  templateUrl: './basecardlist.component.html',
  styleUrls: ['./basecardlist.component.css']
})
export class BasecardlistComponent implements OnInit {

  data: Basecard[] = [];
  filteredData: Basecard[] = [];
  selectedCategory: String = '';
  categories: String[] = [];

  constructor(private modalService:ModalService,private basecardService: BasecardService) { }

  ngOnInit(): void {
    this.data = this.basecardService.getAllBaseCards();
    this.filteredData = this.data;
    this.categories = this.getUniqueCategories(this.data);
  }
  closeModal(){
    this.modalService.$basecardlistModal.emit(false)
  }
  filterCardsByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;
    if(this.selectedCategory == 'all'){
      this.data = this.basecardService.getAllBaseCards();
      return;
    }
    if (this.selectedCategory) {
      this.filteredData = this.basecardService.filterBaseCardsByCategory(this.selectedCategory);
      this.data = this.filteredData
    } else {
      this.filteredData = this.data;
    }
  }


  getUniqueCategories(cards: Basecard[]): String[] {
    const categories = cards.map(card => card.category);
    return [...new Set(categories)];
  }

  resetData(){
    console.log('what')
    this.data = this.basecardService.getAllBaseCards();
    console.log(this.data)
  }
}
