import { EventEmitter, Injectable } from '@angular/core';
import { Basecard } from '../interface/basecard';
import { CardsData } from 'src/app/data/cards.data';

@Injectable({
  providedIn: 'root'
})
export class BasecardService {

  $baseCardId = new EventEmitter<number>();
  private baseCards: Basecard[] = CardsData;
  private baseCardId: number | null = null;

  constructor() { }
  
  setBaseCardId(id: number): void {
    this.baseCardId = id;
    this.$baseCardId.emit(id);
  }

  getBaseCardId(): number | null {
    return this.baseCardId;
  }

  getBaseCardById(id: number): Basecard | undefined {
    return this.baseCards.find(card => card.id === id);
  }

  filterBaseCardsByCategory(category: String): Basecard[] {
    return this.baseCards.filter(card => card.category === category);
  }

  getAllBaseCards(): Basecard[] {
    return this.baseCards;
  }
}