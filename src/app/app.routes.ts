import { ShoppingCartComponent } from "./signals/components/shopping-cart/shopping-cart.component";
import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: HomeComponent },
  {
    path: "products",
    loadComponent: () =>
      import("./signals/components/product-list/product-list.component").then((c) => c.ProductListComponent),
  },
  {
    path: "cart",
    loadComponent: () =>
      import("./signals/components/shopping-cart/shopping-cart.component").then((x) => x.ShoppingCartComponent),
  },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
