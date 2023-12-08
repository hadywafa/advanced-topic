import { Component, OnInit, inject } from "@angular/core";
import { CartItem } from "../../../models/cart";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
})
export class CartListComponent implements OnInit {
  private cartService = inject(CartService);
  pageTitle = "Cart";
  cartItems = this.cartService.cartItems;
  ngOnInit() {}
}
