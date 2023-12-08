import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';
import { CartListComponent } from './components/shopping-cart/cart-list/cart-list.component';
import { CartTotalComponent } from './components/shopping-cart/cart-total/cart-total.component';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './signals.component';
import { HeaderCartComponent } from './components/header-cart/header-cart.component';
const routes:Routes  = [{
  path:"",component:SignalsComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignalsComponent,HeaderCartComponent,ShoppingCartComponent,CartItemComponent,CartListComponent,CartTotalComponent]
})
export class SignalsModule { }
