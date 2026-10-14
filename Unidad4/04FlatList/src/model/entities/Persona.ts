export class Persona {
  private readonly _id: number;
  private readonly _nombre: string;
  private readonly _apellidos: string;

  constructor(id: number, nombre: string, apellidos: string) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }
}