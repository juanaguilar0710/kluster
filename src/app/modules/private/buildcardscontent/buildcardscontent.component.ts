import { Component, Input, OnInit } from '@angular/core';
import { Buildcard } from 'src/services/interface/buildcard.interface';

@Component({
  selector: 'app-buildcardscontent',
  templateUrl: './buildcardscontent.component.html',
  styleUrls: ['./buildcardscontent.component.css']
})
export class BuildcardscontentComponent implements OnInit {

  @Input() builds: Buildcard[] = [];

  constructor() { }

  ngOnInit(): void {
   
  }



}
