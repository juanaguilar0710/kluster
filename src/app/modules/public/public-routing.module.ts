import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewbuildappComponent } from './newbuildapp/newbuildapp.component';
import { PolicyComponent } from './policity/policy.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    {
        path: 'newbuild',
        component: NewbuildappComponent,
    },
    {
      path: 'terms',
      component: TermsComponent,
    },
    {
    path: 'policy',
    component: PolicyComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
