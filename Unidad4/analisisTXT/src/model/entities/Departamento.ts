export class Departamento {
  private readonly _id: number;
  private readonly _nombre: string;

  /**
   * Crea un departamento de la organizacion.
   * @param id Identificador unico del departamento.
   * @param nombre Nombre visible del departamento.
  * @precondition El identificador debe ser valido y el nombre no debe estar vacio.
  * @postcondition Se crea un departamento inmutable con los datos recibidos.
   */
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
  }

  /**
   * Devuelve el identificador del departamento.
   * @returns Identificador del departamento.
  * @precondition La instancia de Departamento debe estar creada.
  * @postcondition No modifica el estado del departamento.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Devuelve el nombre del departamento.
   * @returns Nombre actual del departamento.
  * @precondition La instancia de Departamento debe estar creada.
  * @postcondition No modifica el estado del departamento.
   */
  get nombre(): string {
    return this._nombre;
  }

}
