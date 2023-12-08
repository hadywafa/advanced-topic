import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CartService } from "./signals/services/cart.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  pageTitle = "Acme Product Management";

  private cartService = inject(CartService);

  cartCount = this.cartService.cartCount;
}
