import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewbuildappComponent } from './newbuildapp/newbuildapp.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
