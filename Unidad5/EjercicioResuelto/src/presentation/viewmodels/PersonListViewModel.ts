import { IGetPersonsWithDepartments } from "@/domain/interfaces/usecases/IGetPersonsWithDepartments";
import { IDomainToUIMapper } from "@/presentation/mappers/DomainToUIMapper";
import { PersonUIModel } from "@/presentation/models/PersonUIModel";

export class PersonListViewModel {
  public constructor(
    private readonly getPersonsWithDepartments: IGetPersonsWithDepartments,
    private readonly mapper: IDomainToUIMapper,
  ) {}

  public async load(): Promise<readonly PersonUIModel[]> {
    const persons = await this.getPersonsWithDepartments.execute();
    return persons.map((person) => this.mapper.map(person));
  }
}