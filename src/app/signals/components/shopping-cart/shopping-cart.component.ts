import { Component, OnInit } from "@angular/core";
import { CartListComponent } from "./cart-list/cart-list.component";
import { CartTotalComponent } from "./cart-total/cart-total.component";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  standalone: true,
  imports: [CartListComponent, CartTotalComponent],
})
export class ShoppingCartComponent {}
