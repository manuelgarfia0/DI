export class MarcaCoche {
  private readonly _id: number;
  private readonly _nombre: string;

  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }
}