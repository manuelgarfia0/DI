import { Persona } from "@/domain/entities/Persona";

export interface IPersonaUsecase {
  /**
 * Funcion que devuelve la persona del dia en base al dia de la semana
 * @returns Persona
 * Precondiciones: La lista de personas debe tener al menos 7 elementos
 * Postcondiciones: La persona devuelta no puede estar vacia y debe ser una de las personas de la lista
 */
  getPersonaDelDia(): Persona;
}