import { Persona } from "@/domain/entities/Persona";
import { PersonaConColor } from "@/presentation/models/DTO/PersonaConColor";

export class PersonaConColorMapper {
  static toModel(persona: Persona): PersonaConColor {
    return new PersonaConColor(persona, persona.id - 1);
  }
}
