import { Persona } from "@/model/entities/Persona";

export class repositoryPersonas {
  static obtenerPersonas(): Persona[] {
    return [
      new Persona(1, "Lucía", "García López"),
      new Persona(2, "Mateo", "Martínez Ruiz"),
      new Persona(3, "Sofía", "Navarro Torres"),
      new Persona(4, "Daniel", "Sánchez Molina"),
      new Persona(5, "Valeria", "Díaz Romero"),
    ];
  }
}