import { Component, Input, OnInit, computed, inject, signal } from "@angular/core";
import { CartItem } from "../../../models/cart";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
})
export class CartItemComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  // Use a setter to set the signal
  // when the item is passed in from the parent component
  @Input({ required: true }) set cartItem(ci: CartItem) {
    this.item.set(ci);
  }

  private cartService = inject(CartService);

  item = signal<CartItem>(undefined!);

  // Quantity available (hard-coded to 8)
  // Mapped to an array from 1-8
  // qtyArr = [...Array(8).keys()].map(x => x + 1);

  // Build an array of numbers from 1 to qty available
  qtyArr = computed<Number[]>(() => [...Array(this.item().product.quantityInStock).keys()].map((x) => x + 1));

  // Calculate the extended price
  exPrice = computed(() => this.item().quantity * this.item().product.price);

  onQuantitySelected(quantity: number): void {
    this.cartService.updateQuantity(this.item(), Number(quantity));
  }

  removeFromCart(): void {
    this.cartService.removeFromCart(this.item());
  }
}
