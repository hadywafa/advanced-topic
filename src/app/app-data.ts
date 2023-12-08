import { InMemoryDbService } from "angular-in-memory-web-api";
import { ProductData } from "./signals/data/product-data";
import { ReviewData } from "./signals/data/review-data";
import Product from "./signals/models/product";
import Review from "./signals/models/review";

export class AppData implements InMemoryDbService {
  createDb(): { products: Product[]; reviews: Review[] } {
    const products = ProductData.products;
    const reviews = ReviewData.reviews;
    return { products, reviews };
  }
}
