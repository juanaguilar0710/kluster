import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BasecardComponent } from './basecard/basecard.component';
import { DetailsComponent } from './details/details.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { BasecardlistComponent } from './basecardlist/basecardlist.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent,
    BasecardlistComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent,
    BasecardlistComponent
  ]
})
export class SharedModule { }
