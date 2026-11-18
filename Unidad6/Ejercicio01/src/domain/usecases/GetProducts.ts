import { Product } from "@/domain/entities/Product";
import { IProductRepository } from "@/domain/interfaces/repositories/IProductRepository";
import { IGetProducts } from "@/domain/interfaces/usecases/IGetProducts";

export class GetProducts implements IGetProducts {
  constructor(private readonly productRepository: IProductRepository) {}

  execute(): Product[] {
    return this.productRepository.getProducts();
  }
}
