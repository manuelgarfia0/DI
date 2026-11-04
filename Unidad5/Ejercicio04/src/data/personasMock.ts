import { Persona } from "@/domain/entities/Persona";

export const personasMock: Persona[] = [
  new Persona(1, "Ana", "Garcia Lopez", new Date(1994, 2, 12)),
  new Persona(2, "Bruno", "Martin Sanz", new Date(1988, 6, 24)),
  new Persona(3, "Carla", "Navarro Ruiz", new Date(1997, 10, 5)),
  new Persona(4, "Diego", "Serrano Vega", new Date(1990, 0, 18)),
  new Persona(5, "Elena", "Torres Molina", new Date(1985, 8, 30)),
  new Persona(6, "Fabian", "Ortega Castro", new Date(2000, 5, 8)),
  new Persona(7, "Gabriela", "Vidal Romero", new Date(1992, 11, 21)),
];