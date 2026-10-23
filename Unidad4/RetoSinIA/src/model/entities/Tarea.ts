export class Tarea {
  private readonly _id: number;
  private readonly _titulo: string;
  private readonly _completado: boolean;

  constructor(id: number, titulo: string, completado: boolean) {
    this._id = id;
    this._titulo = titulo;
    this._completado = completado;
  }

  get id(): number {
    return this._id;
  }

  get titulo(): string {
    return this._titulo;
  }

  get completado(): boolean {
    return this._completado;
  }
}