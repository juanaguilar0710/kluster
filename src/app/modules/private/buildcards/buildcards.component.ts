import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { Buildcard } from 'src/services/interface/buildcard.interface';


@Component({
  selector: 'app-buildcards',
  templateUrl: './buildcards.component.html',
  styleUrls: ['./buildcards.component.css']
})
export class BuildcardsComponent implements OnInit {
  
  filteredBuilds$: Observable<Buildcard[]> | undefined;
  searchInput:string='';
  searchMobileIs:boolean=false
  
  constructor(private buildcardService: BuildcardService) { }


   /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the component by setting the default filter to 'All' status.
   */
  ngOnInit(): void {
    this.filterByStatus(-1); // Default to 'All' status
  }


   /**
   * Filters build cards based on their status.
   * @param status The status to filter by. A value of -1 indicates 'All' statuses.
   */

  filterByStatus(status: number): void {
    this.filteredBuilds$ = this.buildcardService.filterByStatus(status).pipe(
      catchError(error => {
        console.error('Error filtering by status:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

 /* onTabChange(event: MatTabChangeEvent): void {
    const tabIndex = event.index;
    switch (tabIndex) {
      case 1: // Draft
        this.filterByStatus(0);
        break;
      case 2: // Ready
        this.filterByStatus(1);
        break;
      case 3: // Paid
        this.filterByStatus(2);
        break;
      case 4: // Running
        this.filterByStatus(3);
        break;
      case 5: // Complete
        this.filterByStatus(4);
        break;
      default:
        this.filterByStatus(-1);
        break;
    }
  }
 */

  /**
   * Handles tab change events to filter build cards by their respective status.
   * @param event The tab change event containing the index of the selected tab.
   */

  onTabChange(event: MatTabChangeEvent): void {
    const tabIndex = event.index;
    switch (tabIndex) {
      case 1: // Draft
        this.filterByStatus(1);
        break;
      case 2: // Ready
        this.filterByStatus(4);
        break;
      default:
        this.filterByStatus(-1);
        break;
    }
  }


  /**
   * Filters build cards by their name based on the search input.
   * If the search input is empty, it defaults to filtering by 'All' status.
   */
  filterFeaturesByName(): void {
    if (this.searchInput.trim() !== '') {

      this.filteredBuilds$ = this.buildcardService.filterByName(this.searchInput).pipe(
        catchError(error => {
          return of([]); 
        })
      );
    }else{
      this.filterByStatus(-1)
    }
  }

  /**
   * Toggles the visibility of the search filter menu for mobile view.
   */
  openFilterMenu(){
      this.searchMobileIs=!this.searchMobileIs;
  }
}
