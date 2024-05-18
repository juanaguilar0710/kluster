import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/services/modal.service';

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

  displayedColumns: string[] = [ 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  baseData:any

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
    this.modalService.$dataModal.subscribe((res)=>{
      this.baseData= res
    })
  }
  
  closeModal(){
    this.modalService.$modal.emit(false)
  }
}
