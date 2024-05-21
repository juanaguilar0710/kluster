import { Component, Input, OnInit } from '@angular/core';
import { Buildcard } from 'src/services/interface/buildcard.interface';

@Component({
  selector: 'app-buildcardscontent',
  templateUrl: './buildcardscontent.component.html',
  styleUrls: ['./buildcardscontent.component.css']
})
export class BuildcardscontentComponent implements OnInit {

  @Input() cards:Buildcard[] =[]
  
  messageIs:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.cards.length <=0){
      this.messageIs = true;
    }
  }



}
