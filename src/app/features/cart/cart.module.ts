import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [CartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class CartModule { }
