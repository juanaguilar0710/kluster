import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersettingsComponent } from './usersettings/usersettings.component';
import { BuildcardsComponent } from './buildcards/buildcards.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from 'src/services/guards/auth.guard';

const routes: Routes = [
  { path: 'user', 
    redirectTo: 'user', 
    component: UsersettingsComponent,
    pathMatch: 'full',
  },
  { path: 'dashboard',  
    component: BuildcardsComponent,canActivate: [AuthGuard]
  } ,
  { path: 'payment',  
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }