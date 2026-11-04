import { Persona } from "@/domain/entities/Persona";
import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";

export class PersonaDelDiaVM {
  private _persona!: Persona;

  constructor(private readonly personaUsecase: IPersonaUsecase) {
    this.cargarPersona();
  }

  get persona(): Persona {
    return this._persona;
  }

  get nombreCompleto(): string {
    return `${this.persona.nombre} ${this.persona.apellidos}`;
  }

  private cargarPersona(): void {
    this._persona = this.personaUsecase.getPersonaDelDia();
  }
}