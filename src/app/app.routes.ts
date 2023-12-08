import { ShoppingCartComponent } from './signals/components/shopping-cart/shopping-cart.component';
import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"shopping-cart",loadComponent: () => import('./signals/signals.module').then(x => x.SignalsModule)
}];
