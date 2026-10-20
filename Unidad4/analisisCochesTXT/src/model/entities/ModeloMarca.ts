export class ModeloMarca {
  private readonly _id: number;
  private readonly _nombre: string;
  private readonly _longitud: number;
  private readonly _anchura: number;
  private readonly _foto: string;
  private readonly _idMarca: number;

  constructor(
    id: number,
    nombre: string,
    longitud: number,
    anchura: number,
    foto: string,
    idMarca: number,
  ) {
    this._id = id;
    this._nombre = nombre;
    this._longitud = longitud;
    this._anchura = anchura;
    this._foto = foto;
    this._idMarca = idMarca;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  get longitud(): number {
    return this._longitud;
  }

  get anchura(): number {
    return this._anchura;
  }

  get foto(): string {
    return this._foto;
  }

  get idMarca(): number {
    return this._idMarca;
  }
}