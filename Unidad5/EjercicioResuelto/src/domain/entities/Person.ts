export class Person {
  public constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly departmentId: number,
  ) {}
}