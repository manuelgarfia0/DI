import { PersonWithDepartmentDTO } from "@/domain/dto/PersonWithDepartmentDTO";
import { PersonUIModel } from "@/presentation/models/PersonUIModel";

export interface IDomainToUIMapper {
  map(person: PersonWithDepartmentDTO): PersonUIModel;
}

export class DomainToUIMapper implements IDomainToUIMapper {
  public map(person: PersonWithDepartmentDTO): PersonUIModel {
    return {
      id: person.id,
      fullName: person.fullName,
      departmentName: person.departmentName,
      departmentColor: this.getDepartmentColor(person.departmentId),
    };
  }

  private getDepartmentColor(departmentId: number): string {
    const colors: Record<number, string> = {
      1: "#FDE68A",
      2: "#BFDBFE",
      3: "#BBF7D0",
      4: "#FBCFE8",
    };

    return colors[departmentId] ?? "#E5E7EB";
  }
}