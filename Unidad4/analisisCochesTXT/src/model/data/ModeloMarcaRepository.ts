import { ModeloMarca } from "@/model/entities/ModeloMarca";

const modelos = [
  new ModeloMarca(1, "Serie 3", 4.71, 1.83, "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200", 1),
  new ModeloMarca(2, "X5", 4.93, 2.00, "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=1200", 1),
  new ModeloMarca(3, "Mustang", 4.81, 1.92, "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=1200", 2),
  new ModeloMarca(4, "Explorer", 5.05, 2.00, "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200", 2),
  new ModeloMarca(5, "Clase C", 4.75, 1.82, "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200", 3),
  new ModeloMarca(6, "911 Carrera", 4.52, 1.85, "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200", 4),
  new ModeloMarca(7, "Corolla", 4.63, 1.78, "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=1200", 5),
];

export class ModeloMarcaRepository {
  public static getListadoModeloPorMarca(idMarca: number): ModeloMarca[] {
    return modelos.filter((modelo) => modelo.idMarca === idMarca);
  }

  public static getModelo(idModelo: number): ModeloMarca {
    const modelo = modelos.find((item) => item.id === idModelo);

    if (!modelo) {
      throw new Error(`No existe un modelo con id ${idModelo}`);
    }

    return modelo;
  }
}