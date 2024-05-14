import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basecard',
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.css']
})
export class BasecardComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
