import { Component, OnInit, inject } from "@angular/core";
import { CartItem } from "../../../models/cart";
import { CartService } from "../../../services/cart.service";
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  standalone: true,
  imports: [CartItemComponent],
})
export class CartListComponent implements OnInit {
  private cartService = inject(CartService);
  pageTitle = "Cart";
  cartItems = this.cartService.cartItems;
  ngOnInit() {}
}
