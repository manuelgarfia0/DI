export class Persona {
  private readonly _id: number;
  private _nombre: string;
  private _apellidos: string;
  private _fechaNacimiento: Date;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    fechaNacimiento: Date,
  ) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._fechaNacimiento = fechaNacimiento;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  get fechaNacimiento(): Date {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(fechaNacimiento: Date) {
    this._fechaNacimiento = fechaNacimiento;
  }
}