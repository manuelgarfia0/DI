import { Product } from "@/domain/entities/Product";
import { IProductRepository } from "@/domain/interfaces/repositories/IProductRepository";
import { ProductDTO } from "@/data/dtos/ProductDTO";

const products: ProductDTO[] = [
  {
    id: "smartwatch",
    name: "Smartwatch X",
    price: 185.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: "headphones",
    name: "Auriculares Pro",
    price: 129.5,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: "camera",
    name: "Camara Mini",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  },
  {
    id: "speaker",
    name: "Altavoz Wave",
    price: 79.9,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
  },
];

export class ProductRepositoryMock implements IProductRepository {
  getProducts(): Product[] {
    return products.map((product) => ({ ...product }));
  }
}
