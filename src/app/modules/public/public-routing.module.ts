import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewbuildappComponent } from './newbuildapp/newbuildapp.component';
import { PolicyComponent } from './policity/policy.component';
import { TermsComponent } from './terms/terms.component';

// Define the routes for the public module
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent, // Default route directs to HomeComponent
  },
  {
    path: 'newbuild',
    component: NewbuildappComponent, // Route for the new build application
  },
  {
    path: 'terms',
    component: TermsComponent, // Route for the terms and conditions page
  },
  {
    path: 'policy',
    component: PolicyComponent, // Route for the policy page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for feature modules
  exports: [RouterModule]
})
export class PublicRoutingModule { }
