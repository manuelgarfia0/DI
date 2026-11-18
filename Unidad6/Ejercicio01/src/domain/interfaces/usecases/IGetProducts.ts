import { Product } from "@/domain/entities/Product";

export interface IGetProducts {
  execute(): Product[];
}
