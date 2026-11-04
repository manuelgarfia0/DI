import { Persona } from "@/domain/entities/Persona";

export interface IPersonaRepository {
  getListadoPersonas(): Persona[];
}