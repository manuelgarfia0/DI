import "reflect-metadata";
import { Container } from "inversify";
import { PersonaRepository } from "@/data/repositories/PersonaRepository";
import { PersonaRepositoryDoscientas } from "@/data/repositories/PersonaRepositoryDoscientas";
import { PersonaRepositoryVacio } from "@/data/repositories/PersonaRepositoryVacio";
import { IPersonaRepository } from "@/domain/interfaces/repositories/IPersonaRepository";
import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";
import { PersonaUsecase } from "@/domain/usecases/PersonaUsecase";
import { ListadoPersonasVM } from "@/presentation/viewmodels/ListadoPersonasVM";
import { TYPES } from "@/di/types";

/**
 * Contenedor de dependencias de la aplicacion.
 *
 * Precondicion: las implementaciones deben respetar sus contratos de dominio.
 * Postcondicion: permite construir la vista con todas sus dependencias inyectadas.
 */
export const container = new Container();

container.bind<IPersonaRepository>(TYPES.PersonaRepository).to(PersonaRepository).inSingletonScope();
container.bind<IPersonaUsecase>(TYPES.PersonaUsecase).toDynamicValue((context) =>
  new PersonaUsecase(context.get(TYPES.PersonaRepository)),
);
container.bind(ListadoPersonasVM).toDynamicValue((context) =>
  new ListadoPersonasVM(context.get(TYPES.PersonaUsecase)),
);
