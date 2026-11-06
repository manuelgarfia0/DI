import { Persona } from "@/domain/entities/Persona";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";

/**
 * Repositorio de prueba que genera exactamente 200 personas.
 *
 * Precondicion: ninguna, los datos se generan de forma determinista.
 * Postcondicion: devuelve 200 personas y una copia independiente del listado.
 */
export class PersonaRepositoryDoscientas implements IPersonaRepository {
  private readonly personas: Persona[] = Array.from(
    { length: 200 },
    (_, index) =>
      new Persona(
        `${20000000 + index}X`,
        `Persona ${index + 1}`,
        index % 2 === 0 ? "Mujer" : "Hombre",
      ),
  );

  public getListadoPersonas(): Persona[] {
    return [...this.personas];
  }
}
