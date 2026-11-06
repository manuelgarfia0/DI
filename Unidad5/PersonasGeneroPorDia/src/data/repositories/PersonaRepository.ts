import { Persona } from "@/domain/entities/Persona";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";

/**
 * Repositorio de demostracion con un conjunto pequeno de personas.
 *
 * Precondicion: ninguna, los datos estan definidos en memoria.
 * Postcondicion: devuelve una copia del listado para proteger el almacenamiento.
 */
export class PersonaRepository implements IPersonaRepository {
  private readonly personas: Persona[] = [
    new Persona("10000001A", "Ana Garcia", "Mujer"),
    new Persona("10000002B", "Carlos Martin", "Hombre"),
    new Persona("10000003C", "Lucia Perez", "Mujer"),
    new Persona("10000004D", "Daniel Lopez", "Hombre"),
    new Persona("10000005E", "Marta Sanchez", "Mujer"),
    new Persona("10000006F", "Pablo Romero", "Hombre"),
  ];

  public getListadoPersonas(): Persona[] {
    return [...this.personas];
  }
}
