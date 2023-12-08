import { Component, OnInit, inject } from "@angular/core";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: "app-cart-total",
  templateUrl: "./cart-total.component.html",
})
export class CartTotalComponent {
  private cartService = inject(CartService);

  // Reference the service signals for binding
  cartItems = this.cartService.cartItems;
  subTotal = this.cartService.subTotal;
  deliveryFee = this.cartService.deliveryFee;
  tax = this.cartService.tax;
  totalPrice = this.cartService.totalPrice;
}
