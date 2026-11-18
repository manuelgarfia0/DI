import { ProductCatalogView } from "@/presentation/views/ProductCatalogView";
import { useProductCatalog } from "@/presentation/viewmodels/useProductCatalog";
import { ProductRepositoryMock } from "@/data/repositories/ProductRepositoryMock";
import { AddToCart } from "@/domain/usecases/AddToCart";
import { GetProducts } from "@/domain/usecases/GetProducts";

const productRepository = new ProductRepositoryMock();
const getProducts = new GetProducts(productRepository);
const addToCart = new AddToCart();

export default function Index() {
  const { products, cartItems, handleAddToCart } = useProductCatalog(
    getProducts,
    addToCart,
  );

  return (
    <ProductCatalogView
      cartItems={cartItems}
      onAddToCart={handleAddToCart}
      products={products}
    />
  );
}
