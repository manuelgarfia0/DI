import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";
import { PersonaConColor } from "@/presentation/models/DTO/PersonaConColor";
import { PersonaConColorMapper } from "@/presentation/models/mappers/PersonaConColorMapper";

export class PersonaDelDiaVM {
  private _personaConColor!: PersonaConColor;

  constructor(private readonly personaUsecase: IPersonaUsecase) {
    this.cargarPersona();
  }

  get personaConColor(): PersonaConColor {
    return this._personaConColor;
  }

  get nombreCompleto(): string {
    return `${this._personaConColor.nombre} ${this._personaConColor.apellidos}`;
  }

  private cargarPersona(): void {
    const persona = this.personaUsecase.getPersonaDelDia();
    this._personaConColor = PersonaConColorMapper.toModel(persona);
  }
}