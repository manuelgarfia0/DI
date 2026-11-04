import { Persona } from "@/domain/entities/Persona";

export interface IPersonaUsecase {
  getPersonaDelDia(): Persona;
}