import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-rounting.module';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { BuildcardsComponent } from './buildcards/buildcards.component';
import { PaymentComponent } from './payment/payment.component';

import { SharedModule  } from 'src/app/shared/shared.module';

/* material */
import {MatTabsModule} from '@angular/material/tabs';
import { BuildcardscontentComponent } from './buildcardscontent/buildcardscontent.component';

@NgModule({
  declarations: [
    UsersettingsComponent,
    BuildcardsComponent,
    PaymentComponent,
    BuildcardscontentComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class PrivateModule { }
