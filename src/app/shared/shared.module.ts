import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BasecardComponent } from './basecard/basecard.component';
import { DetailsComponent } from './details/details.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent
  ]
})
export class SharedModule { }
