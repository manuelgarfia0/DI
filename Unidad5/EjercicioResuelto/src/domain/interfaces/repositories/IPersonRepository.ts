import { Person } from "@/domain/entities/Person";
import { Department } from "@/domain/entities/Department";

export type PersonWithDepartment = {
  readonly person: Person;
  readonly department: Department;
};

export interface IPersonRepository {
  getPersonsWithDepartments(): Promise<readonly PersonWithDepartment[]>;
}