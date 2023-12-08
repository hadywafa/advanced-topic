import { Component, OnInit, inject } from "@angular/core";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-header-cart",
  templateUrl: "./header-cart.component.html",
})
export class HeaderCartComponent {
  private cartService = inject(CartService);

  cartCount = this.cartService.cartCount;
}
