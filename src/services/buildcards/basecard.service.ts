import { Injectable } from '@angular/core';
import { Basecard } from '../interface/basecard';
import { CardsData } from 'src/app/data/cards.data';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/**BasecardService provides functionality related 
 * to basecards. It loads basecards from the CardsData array, 
 * exposes methods to set and retrieve basecards.
 * The service uses BehaviorSubjects to emit changes to subscribed components.
 *  */
export class BasecardService {

  private baseCards: Basecard[] = CardsData;
  private baseCardsSubject: BehaviorSubject<Basecard[]> = new BehaviorSubject<Basecard[]>([]);
  baseCards$: Observable<Basecard[]> = this.baseCardsSubject.asObservable();


  private baseCardIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  baseCardId$ = this.baseCardIdSubject.asObservable();

  constructor() { 
    this.loadBaseCards();
  }
// Load basecards initially
  private loadBaseCards(): void {
    this.baseCardsSubject.next(this.baseCards);
  }
// Set basecards
  setBaseCards(baseCards: Basecard[]): void {
    this.baseCardsSubject.next(baseCards);
  }
// Set basecard ID
  setBaseCardId(id: number|null): void {
    this.baseCardIdSubject.next(id);
  }
// Get basecard by ID
  getBaseCardById(id: number): Observable<Basecard> {
    const card = this.baseCards.find(card => card.id === id);
    return card ? of(card) : throwError(`Basecard with id ${id} not found.`);
  }

  // Filter basecards by category
  filterBaseCardsByCategory(category: String): Observable<Basecard[]> {
    const filteredCards = this.baseCards.filter(card => card.category === category);
    return of(filteredCards);
  }
 // Get all basecards
  getAllBaseCards(): Observable<Basecard[]> {
    return this.baseCards$;
  }
  // Filter basecards by name
  filterFeaturesByName(query: string): Observable<Basecard[]> {
    const filteredbasecards = this.baseCards.filter(basecard => 
      basecard.title.toLowerCase().includes(query.toLowerCase()) 
    );
    return of(filteredbasecards);
  }
}
