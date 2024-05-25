import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { Buildcard } from 'src/services/interface/buildcard.interface';


@Component({
  selector: 'app-buildcards',
  templateUrl: './buildcards.component.html',
  styleUrls: ['./buildcards.component.css']
})
export class BuildcardsComponent implements OnInit {
  
  filteredBuilds$: Observable<Buildcard[]> | undefined;

  constructor(private buildcardService: BuildcardService) { }

  ngOnInit(): void {
    this.filterByStatus(-1); // Default to 'All' status
  }

  filterByStatus(status: number): void {
    this.filteredBuilds$ = this.buildcardService.filterByStatus(status).pipe(
      catchError(error => {
        console.error('Error filtering by status:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

  onTabChange(event: MatTabChangeEvent): void {
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

}
