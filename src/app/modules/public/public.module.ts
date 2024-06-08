import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { NewbuildappComponent } from './newbuildapp/newbuildapp.component';
import { PolicyComponent } from './policity/policy.component';
import { TermsComponent } from './terms/terms.component';

/* material */
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CardsComponent,
    HomeComponent,
    NewbuildappComponent,
    TermsComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  exports: [HomeComponent, CardsComponent, PolicyComponent,TermsComponent],
})
export class PublicModule {}
