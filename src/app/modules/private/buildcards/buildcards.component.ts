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
  builds: Buildcard[] = [];
  filteredBuilds: Buildcard[] = [];


  ngOnInit(): void {
    this.builds = this.buildcardService.getBuildcards();
    this.filterByStatus(-1); // Default to 'All' status
  }

getAllBuildCards(){
  this.builds = this.buildcardService.getBuildcards();
}

  filterByStatus(status: number): void {
    if (status === -1) {
      this.filteredBuilds = this.builds;
    } else {
      this.filteredBuilds = this.buildcardService.filterByStatus(status);
    }
  }

  /* filterByStatus(status:number):void{
    this.builds=this.buildcardService.filterByStatus(status);
  } */
}
