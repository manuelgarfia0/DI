import { IAddToCart } from "@/domain/interfaces/usecases/IAddToCart";

export class AddToCart implements IAddToCart {
  private cartItems = 0;

  execute(): number {
    this.cartItems += 1;
    return this.cartItems;
  }
}
