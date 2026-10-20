export class Persona {
  private readonly _id: number;
  private readonly _nombre: string;
  private readonly _apellido: string;
  private readonly _idDepartamento: number;

  /**
   * Crea una persona asociada a un departamento.
   * @param id Identificador unico de la persona.
   * @param nombre Nombre de la persona.
   * @param apellido Apellido de la persona.
   * @param idDepartamento Identificador del departamento asociado.
  * @precondition Los identificadores deben ser validos y los textos no deben estar vacios.
  * @postcondition Se crea una persona inmutable con los datos recibidos.
   */
  constructor(id: number, nombre: string, apellido: string, idDepartamento: number) {
    this._id = id;
    this._nombre = nombre;
    this._apellido = apellido;
    this._idDepartamento = idDepartamento;
  }

  /**
   * Devuelve el identificador de la persona.
   * @returns Identificador de la persona.
  * @precondition La instancia de Persona debe estar creada.
  * @postcondition No modifica el estado de la persona.
   */
  get id(): number {
    return this._id;
  }

  /**
   * Devuelve el nombre de la persona.
   * @returns Nombre actual de la persona.
  * @precondition La instancia de Persona debe estar creada.
  * @postcondition No modifica el estado de la persona.
   */
  get nombre(): string {
    return this._nombre;
  }

  /**
   * Devuelve el apellido de la persona.
   * @returns Apellido actual de la persona.
  * @precondition La instancia de Persona debe estar creada.
  * @postcondition No modifica el estado de la persona.
   */
  get apellido(): string {
    return this._apellido;
  }

  /**
   * Devuelve el departamento al que pertenece la persona.
   * @returns Identificador del departamento.
  * @precondition La instancia de Persona debe estar creada.
  * @postcondition No modifica el estado de la persona.
   */
  get idDepartamento(): number {
    return this._idDepartamento;
  }

}
