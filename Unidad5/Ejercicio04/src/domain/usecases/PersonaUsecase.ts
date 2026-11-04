import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";
import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";
import { Persona } from "@/domain/entities/Persona";

export class PersonaUsecase implements IPersonaUsecase {
  constructor(private readonly personaRepository: IPersonaRepository) {}

  getPersonaDelDia(): Persona {
    const listadoPersonas = this.personaRepository.getListadoPersonas();
    const diaSemana = (new Date().getDay() + 6) % 7;

    return listadoPersonas[diaSemana];
  }
}