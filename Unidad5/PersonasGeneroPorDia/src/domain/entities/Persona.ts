/**
 * Representa una persona del dominio.
 *
 * Precondicion: el DNI, el nombre y el genero deben recibirse como texto.
 * Postcondicion: el DNI queda inmutable y nombre y genero pueden actualizarse.
 */
export class Persona {
  public constructor(
    private readonly _dni: string,
    private _nombre: string,
    private _genero: string,
  ) {}

  /**
   * Devuelve el identificador de la persona.
   *
   * Precondicion: la instancia debe haber sido construida.
   * Postcondicion: devuelve siempre el mismo DNI.
   */
  public get dni(): string {
    return this._dni;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(nombre: string) {
    this._nombre = nombre;
  }

  public get genero(): string {
    return this._genero;
  }

  public set genero(genero: string) {
    this._genero = genero;
  }
}
