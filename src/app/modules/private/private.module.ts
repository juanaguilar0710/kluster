import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-rounting.module';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { BuildcardsComponent } from './buildcards/buildcards.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    UsersettingsComponent,
    BuildcardsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
