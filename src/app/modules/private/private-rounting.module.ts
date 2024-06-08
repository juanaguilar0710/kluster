import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildcardsComponent } from './buildcards/buildcards.component';
import { PaymentComponent } from './payment/payment.component';

/**
 * Defines the routes for the private module.
 */
const routes: Routes = [
  /**
   * Route for the dashboard component.
   * When the URL is '/dashboard', BuildcardsComponent is loaded.
   */
  { path: 'dashboard',  
    component: BuildcardsComponent
  } ,
  { path: 'payment',  
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //Configures the routing module with the routes defined for this module. forChild is used for feature modules in an Angular application
  exports: [RouterModule] // Exports RouterModule so that the route configurations defined are available in other modules that import this module.
})
/**
 * PrivateRoutingModule is responsible for managing the specific routes
 * of the private module in the application.
 */
export class PrivateRoutingModule { }