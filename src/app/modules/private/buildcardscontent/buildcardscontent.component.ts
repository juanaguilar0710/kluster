import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BuildcardService } from 'src/services/buildcards/buildcard.service';
import { Buildcard } from 'src/services/interface/buildcard.interface';

@Component({
  selector: 'app-buildcardscontent',
  templateUrl: './buildcardscontent.component.html',
  styleUrls: ['./buildcardscontent.component.css']
})
export class BuildcardscontentComponent implements OnInit {

  @Input() builds: Buildcard[] = [];
  newName: string = '';
  optionsVisibility: { [id: number]: boolean } = {}; 
  changeNameIs:Boolean=false;

  constructor(private buildcardService:BuildcardService) { }

  ngOnInit(): void {
     this.builds.forEach(build => {
      this.optionsVisibility[build.id] = false;
    });
  }


  toStringStatus(id:number):string{
    switch (id) {
      case 0:
        return 'Draft'; //green
      case 1:
        return 'Ready'; //blue
      case 2:
         return 'Paid';//gray
      case 3:
        return 'Running';//yellow
      case 4:
        return 'Complete';//violet
      default:
        return 'Draft';
    }
  }

  toggleOptions(buildId: number): void {
    this.optionsVisibility[buildId] = !this.optionsVisibility[buildId];
  }

  deleteBuild(buildId: number): void {
    this.buildcardService.deleteBuildcard(buildId);
    this.toggleOptions(buildId);
  }

  updateBuildName(buildId: number): void {
    if (this.newName.trim() === '') {
      return;
    }
  
    this.buildcardService.updateBuildName(buildId, this.newName);
    this.changeNameIs = false; 
  }
  editName(buildId: number):void{
    this.changeNameIs=true
    this.toggleOptions(buildId);
  }
  closeModal():void{
    this.changeNameIs=false
  }
}
