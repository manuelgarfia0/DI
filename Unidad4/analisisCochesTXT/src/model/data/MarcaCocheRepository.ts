import { MarcaCoche } from "@/model/entities/MarcaCoche";

const marcas = [
  new MarcaCoche(1, "BMW"),
  new MarcaCoche(2, "Ford"),
  new MarcaCoche(3, "Mercedes-Benz"),
  new MarcaCoche(4, "Porsche"),
  new MarcaCoche(5, "Toyota"),
];

export class MarcaCocheRepository {
  public static getListadoMarcasCoches(): MarcaCoche[] {
    return [...marcas];
  }
}