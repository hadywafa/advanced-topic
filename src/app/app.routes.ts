import { ShoppingCartComponent } from "./signals/components/shopping-cart/shopping-cart.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "shopping-cart", pathMatch: "full" },
  {
    path: "shopping-cart",
    loadChildren: () => import("./signals/signals.module").then((x) => x.SignalsModule),
  },
];
