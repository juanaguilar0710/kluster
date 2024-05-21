import { Component, OnInit } from '@angular/core';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { Buildcard } from 'src/services/interface/buildcard.interface';


@Component({
  selector: 'app-buildcards',
  templateUrl: './buildcards.component.html',
  styleUrls: ['./buildcards.component.css']
})
export class BuildcardsComponent implements OnInit {

  constructor(private buildcardService:BuildcardService) { }

  builds:Buildcard[] =[];

  ngOnInit(): void {
  }


  filterByStatus(status:number):void{
    this.builds=this.buildcardService.filterByStatus(status);
  }
}
