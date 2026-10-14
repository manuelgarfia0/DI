import { Persona } from "@/model/entities/Persona";

export interface IPersonasRepository {
  obtenerPersonas(): Persona[];
}