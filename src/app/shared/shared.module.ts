import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BasecardComponent } from './basecard/basecard.component';

import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BasecardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BasecardComponent
  ]
})
export class SharedModule { }
