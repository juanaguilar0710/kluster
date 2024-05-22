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

  constructor(private basecardService: BasecardService) { }

  ngOnInit(): void {
    this.data = this.basecardService.getAllBaseCards();
  }

  getBaseCard(id: number):Basecard | null {
    const baseCard = this.basecardService.getBaseCardById(id);
    if (baseCard) {
      return baseCard
    } else {
      return null;
      console.error('Base card not found');
    }
  }

  filterByCategory(category: string) {
    this.data = this.basecardService.filterBaseCardsByCategory(category);
  }
}
