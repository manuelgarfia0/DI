import "reflect-metadata";
import { Container } from "inversify";
import { GetPersonsWithDepartments } from "@/application/usecases/GetPersonsWithDepartments";
import { PersonRepositoryMock } from "@/data/repositories/PersonRepositoryMock";
import { IPersonRepository } from "@/domain/interfaces/repositories/IPersonRepository";
import { IGetPersonsWithDepartments } from "@/domain/interfaces/usecases/IGetPersonsWithDepartments";
import { DomainToUIMapper, IDomainToUIMapper } from "@/presentation/mappers/DomainToUIMapper";
import { PersonListViewModel } from "@/presentation/viewmodels/PersonListViewModel";
import { TYPES } from "@/di/types";

const container = new Container();

container.bind<IPersonRepository>(TYPES.PersonRepository).toConstantValue(
  new PersonRepositoryMock(),
);
container
  .bind<IGetPersonsWithDepartments>(TYPES.GetPersonsWithDepartments)
  .toDynamicValue((context) =>
    new GetPersonsWithDepartments(
      context.get<IPersonRepository>(TYPES.PersonRepository),
    ),
  );
container.bind<IDomainToUIMapper>(TYPES.DomainToUIMapper).to(DomainToUIMapper);
container.bind<PersonListViewModel>(TYPES.PersonListViewModel).toDynamicValue(
  (context) =>
    new PersonListViewModel(
      context.get<IGetPersonsWithDepartments>(TYPES.GetPersonsWithDepartments),
      context.get<IDomainToUIMapper>(TYPES.DomainToUIMapper),
    ),
);

export { container };