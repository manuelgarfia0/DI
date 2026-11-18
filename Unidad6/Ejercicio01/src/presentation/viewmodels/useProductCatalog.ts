import { useState } from "react";
import { Product } from "@/domain/entities/Product";
import { IAddToCart } from "@/domain/interfaces/usecases/IAddToCart";
import { IGetProducts } from "@/domain/interfaces/usecases/IGetProducts";

export function useProductCatalog(
  getProducts: IGetProducts,
  addToCart: IAddToCart,
) {
  const [products] = useState<Product[]>(() => getProducts.execute());
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = () => {
    setCartItems(addToCart.execute());
  };

  return {
    products,
    cartItems,
    handleAddToCart,
  };
}
