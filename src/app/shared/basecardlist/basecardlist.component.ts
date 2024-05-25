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
  canContinue: boolean = false;

  constructor(private modalService:ModalService,private basecardService: BasecardService) { }

  ngOnInit(): void {
    this.getAllBasecards()

    this.filteredData = this.data;
    this.categories = this.getUniqueCategories(this.data);

    this.basecardService.baseCardId$.subscribe((id: number | null) => {
      this.canContinue = id !== null;
    });
  }
  closeModal(){
    this.modalService.$basecardlistModal.emit(false)
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

  resetData(){
    this.getAllBasecards()
  }

  getAllBasecards(){
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });

  }
}
