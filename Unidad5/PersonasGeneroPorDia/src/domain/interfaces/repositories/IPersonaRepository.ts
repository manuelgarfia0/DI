import { Persona } from "@/domain/entities/Persona";

/**
 * Contrato de acceso a personas.
 *
 * Precondicion: la implementacion debe poder obtener una coleccion de personas.
 * Postcondicion: no define el origen de los datos ni modifica el dominio.
 */
export interface IPersonaRepository {
  getListadoPersonas(): Persona[];
}
