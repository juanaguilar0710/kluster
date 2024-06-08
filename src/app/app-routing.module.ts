import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Public module routes
    path: '',
    loadChildren: () =>
      import('././modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    // Private module routes
    path: 'user',
    loadChildren: () =>
      import('././modules/private/private.module').then((m) => m.PrivateModule),
  },
  {
    // Default route redirection
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
