import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BasecardComponent } from './basecard/basecard.component';
import { DetailsComponent } from './details/details.component';
import { BasecardlistComponent } from './basecardlist/basecardlist.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CustomBackgroundColorDirective } from './directives/custom-backgroud-color.directive';
import { FeaturesListComponent } from './features-list/features-list.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';;
import { CountryCodeSelectComponent } from './country-code-select/country-code-select.component';
import { BasecardselectedComponent } from './basecardselected/basecardselected.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent,
    BasecardlistComponent,
    CustomBackgroundColorDirective,
    FeaturesListComponent,
    FeatureCardComponent,
    CountryCodeSelectComponent,
    BasecardselectedComponent,

    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BasecardComponent,
    DetailsComponent,
    BasecardlistComponent,
    FeaturesListComponent,
    CustomBackgroundColorDirective,
    CountryCodeSelectComponent,
    BasecardselectedComponent
  ]
})
export class SharedModule { }
