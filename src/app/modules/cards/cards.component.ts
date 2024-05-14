import { Component, OnInit } from '@angular/core';
import { CardsData } from 'src/app/data/cards.data';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  data = CardsData;

  constructor() { }

  ngOnInit(): void {
  }

}
