import { Product } from "@/domain/entities/Product";

export interface IProductRepository {
  getProducts(): Product[];
}
