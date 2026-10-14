import { Persona } from "@/model/entities/Persona";
import { IPersonasRepository } from "@/model/repositories/IPersonasRepository";

export class PersonasRepository implements IPersonasRepository {
  obtenerPersonas(): Persona[] {
    return [
      new Persona(1, "Lucía", "García López"),
      new Persona(2, "Mateo", "Martínez Ruiz"),
      new Persona(3, "Sofía", "Navarro Torres"),
      new Persona(4, "Daniel", "Sánchez Molina"),
      new Persona(5, "Valeria", "Díaz Romero"),
    ];
  }
}