export class Persona {
  private _id: number;
  private _nombre: string;
  private _apellidos: string;

  constructor(id: number, nombre: string, apellidos: string) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
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
}