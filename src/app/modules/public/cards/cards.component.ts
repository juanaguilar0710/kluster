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
    this.basecardService.getAllBaseCards().subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });
  }

  /* getBaseCard(id: number):Basecard | null {
    this.basecardService.getBaseCardById(id).subscribe((res)=>{

      if (res) {
        return res
      } else {
        return null;
        console.error('Base card not found');
      }
    },error=>{
      return null;
    });
  } */

  filterByCategory(category: string): void {
    this.basecardService.filterBaseCardsByCategory(category).subscribe((res)=>{
      this.data=res
    },error=>{
      console.error(error)
    });;
  }
}
