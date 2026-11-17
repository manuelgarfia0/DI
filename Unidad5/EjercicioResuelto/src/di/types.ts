export const TYPES = {
  PersonRepository: Symbol.for("PersonRepository"),
  GetPersonsWithDepartments: Symbol.for("GetPersonsWithDepartments"),
  DomainToUIMapper: Symbol.for("DomainToUIMapper"),
  PersonListViewModel: Symbol.for("PersonListViewModel"),
} as const;