import { PersonWithDepartmentDTO } from "@/domain/dto/PersonWithDepartmentDTO";

export interface IGetPersonsWithDepartments {
  execute(): Promise<readonly PersonWithDepartmentDTO[]>;
}