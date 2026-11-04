import { PersonaRepository } from "@/data/repositories/PersonaRepository";
import { PersonaUsecase } from "@/domain/usecases/PersonaUsecase";
import { PersonaDelDiaView } from "@/presentation/views/PersonaDelDiaView";

export default function Index() {
  const personaRepository = new PersonaRepository();
  const personaUsecase = new PersonaUsecase(personaRepository);

  return <PersonaDelDiaView personaUsecase={personaUsecase} />;
}
