import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { BuildcardsComponent } from './buildcards/buildcards.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    ProfileComponent,
    BuildcardsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    CardsComponent,
  ]
})
export class ModulesModule { }
