import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'cart',
  loadChildren: ()=>import('./features/cart/cart.module').then(mod=>mod.CartModule)
  },
  {
    path: 'tracking',
    loadChildren: ()=>import('./features/tracking/tracking.module').then(mod=>mod.TrackingModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
