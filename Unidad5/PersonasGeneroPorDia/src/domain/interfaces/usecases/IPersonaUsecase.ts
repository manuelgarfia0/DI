import { Persona } from "@/domain/entities/Persona";

/**
 * Expone las operaciones de personas que necesita la presentacion.
 *
 * Precondicion: debe existir un repositorio de personas inyectado.
 * Postcondicion: devuelve solo las personas del genero correspondiente al dia.
 */
export interface IPersonaUsecase {
  getListadoPersonasPorSexo(): Persona[];
}
