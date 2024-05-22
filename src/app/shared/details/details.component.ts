import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasecardService } from 'src/services/buildcards/basecard.service';
import { ModalService } from 'src/services/modal.service';
import { Subscription } from 'rxjs';
import { Basecard } from 'src/services/interface/basecard';

export interface PeriodicElement {
  name: string;
  weight: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', weight: 1.0079},
  { name: 'Helium', weight: 4.0026},
  { name: 'Lithium', weight: 6.941},
  { name: 'Beryllium', weight: 9.0122},
  { name: 'Boron', weight: 10.811},
  { name: 'Carbon', weight: 12.0107},
  { name: 'Nitrogen', weight: 14.0067},
  { name: 'Oxygen', weight: 15.9994},
  { name: 'Fluorine', weight: 18.9984},
  { name: 'Neon', weight: 20.1797},
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  displayedColumns: string[] = [ 'Feature', 'Cost'];
  dataSource = ELEMENT_DATA;

  baseData!:Basecard;

  constructor(private modalService:ModalService,
    private basecardService: BasecardService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.baseData = this.modalService.getDataModal()
    
  }
  closeModal(){
    this.modalService.$modal.emit(false)
  }

  useBase(): void {
    this.router.navigate(['/newbuild'])
    this.basecardService.setBaseCardId(this.baseData!.id);
    this.closeModal()
  }

  
}
