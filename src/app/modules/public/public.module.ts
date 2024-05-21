import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { NewbuildappComponent } from './newbuildapp/newbuildapp.component';

/* material */
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    LoginComponent,
    NewbuildappComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    CardsComponent,
  ]
})
export class PublicModule { }
