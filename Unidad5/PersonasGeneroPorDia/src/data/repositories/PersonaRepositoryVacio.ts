import { Persona } from "@/domain/entities/Persona";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";

/**
 * Repositorio sin datos para validar el estado vacio de la presentacion.
 *
 * Precondicion: ninguna.
 * Postcondicion: siempre devuelve una lista vacia nueva.
 */
export class PersonaRepositoryVacio implements IPersonaRepository {
  public getListadoPersonas(): Persona[] {
    return [];
  }
}
