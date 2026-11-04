import { personasMock } from "@/data/personasMock";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";
import { Persona } from "@/domain/entities/Persona";

export class PersonaRepository implements IPersonaRepository {
  public getListadoPersonas(): Persona[] {
    return personasMock;
  }
}