import { Persona } from "@/domain/entities/Persona";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";
import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";

/**
 * Caso de uso que aplica la regla de genero asociada al dia del mes.
 */
export class PersonaUsecase implements IPersonaUsecase {
  public constructor(private readonly personaRepository: IPersonaRepository) {}

  /**
   * Obtiene hombres en dias pares y mujeres en dias impares.
   *
   * Precondicion: el repositorio inyectado debe devolver personas con genero.
   * Postcondicion: devuelve una nueva lista filtrada sin mutar el resultado del repositorio.
   */
  public getListadoPersonasPorSexo(): Persona[] {
    const personas = this.personaRepository.getListadoPersonas();
    const generoEsperado = new Date().getDate() % 2 === 0 ? "Hombre" : "Mujer";

    return personas.filter((persona) => persona.genero === generoEsperado);
  }
}
