import { PersonWithDepartmentDTO } from "@/domain/dto/PersonWithDepartmentDTO";
import { IPersonRepository } from "@/domain/interfaces/repositories/IPersonRepository";
import { IGetPersonsWithDepartments } from "@/domain/interfaces/usecases/IGetPersonsWithDepartments";

export class GetPersonsWithDepartments implements IGetPersonsWithDepartments {
  public constructor(private readonly personRepository: IPersonRepository) {}

  public async execute(): Promise<readonly PersonWithDepartmentDTO[]> {
    const records = await this.personRepository.getPersonsWithDepartments();

    return records.map(({ person, department }) => ({
      id: person.id,
      fullName: `${person.firstName} ${person.lastName}`,
      departmentId: department.id,
      departmentName: department.name,
    }));
  }
}