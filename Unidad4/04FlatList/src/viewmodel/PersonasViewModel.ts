import { Persona } from "@/model/entities/Persona";
import { IPersonasRepository } from "@/model/repositories/IPersonasRepository";

export class PersonasViewModel {
  private readonly _personas: Persona[];
  private _personaSeleccionada: Persona | null = null;

  constructor(personasRepository: IPersonasRepository) {
    this._personas = personasRepository.obtenerPersonas();
  }

  get personas(): Persona[] {
    return this._personas;
  }

  get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  seleccionarPersona(persona: Persona): Persona {
    this._personaSeleccionada = persona;
    return persona;
  }
}