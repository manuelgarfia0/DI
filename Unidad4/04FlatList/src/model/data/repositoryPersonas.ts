import { Persona } from "@/model/entities/Persona";

export class repositoryPersonas {
  /**
   * Función que devuelve un array de personas
   * Pre: Ninguna
   * Post: El array nunca estará vacío
   * @returns Array de personas
   */
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