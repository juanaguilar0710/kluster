import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';

/* material */
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatInputModule
  ],
  exports:[
    HomeComponent,
    CardsComponent,
  ]
})
export class PublicModule { }
