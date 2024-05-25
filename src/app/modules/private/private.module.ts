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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
    MatTabsModule,
    MatIconModule,
    FormsModule
  ]
})
export class PrivateModule { }
