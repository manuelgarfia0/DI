import { personasMock } from "@/data/personasMock";
import { Persona } from "@/domain/models/Persona";

export const getPersonaDelDia = (
  fecha: Date = new Date(),
  personas: Persona[] = personasMock,
): Persona => {
  const indiceDelDia = (fecha.getDay() + 6) % 7;
  return personas[indiceDelDia];
};

export const usePersonaViewModel = () => ({
  personaDelDia: getPersonaDelDia(),
});