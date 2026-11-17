import { Department } from "@/domain/entities/Department";
import { Person } from "@/domain/entities/Person";
import {
  IPersonRepository,
  PersonWithDepartment,
} from "@/domain/interfaces/repositories/IPersonRepository";

export class PersonRepositoryMock implements IPersonRepository {
  private readonly departments: readonly Department[] = [
    new Department(1, "Diseño"),
    new Department(2, "Desarrollo"),
    new Department(3, "Marketing"),
    new Department(4, "Soporte"),
  ];

  private readonly persons: readonly Person[] = [
    new Person(1, "Ana", "García", 1),
    new Person(2, "Bruno", "Martín", 2),
    new Person(3, "Carla", "Santos", 3),
    new Person(4, "Diego", "Navarro", 2),
    new Person(5, "Elena", "Ruiz", 4),
    new Person(6, "Félix", "Molina", 1),
    new Person(7, "Gabriela", "López", 3),
  ];

  public async getPersonsWithDepartments(): Promise<readonly PersonWithDepartment[]> {
    return this.persons.map((person) => ({
      person,
      department: this.departments.find(
        (department) => department.id === person.departmentId,
      ) as Department,
    }));
  }
}