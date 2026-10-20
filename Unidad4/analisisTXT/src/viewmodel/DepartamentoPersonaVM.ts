import { Departamento } from "@/model/entities/Departamento";
import { Persona } from "@/model/entities/Persona";
import { DepartamentoRepository } from "@/model/data/DepartamentoRepository";
import { PersonaRepository } from "@/model/data/PersonaRepository";

type Listener = () => void;

export class DepartamentoPersonaVM {
  private readonly _listaDepartamento: Departamento[];
  private _depSeleccionado: Departamento | null = null;
  private _listaPersonasDepartamentos: Persona[] = [];
  private _numeroPersonasPorDepartamento = 0;
  private readonly listeners = new Set<Listener>();

  /**
   * Inicializa el ViewModel con el catalogo de departamentos disponible.
    * @precondition Los repositorios de departamentos y personas deben estar disponibles.
    * @postcondition El ViewModel queda listo con la seleccion vacia y el contador a cero.
   */
  constructor() {
    this._listaDepartamento = DepartamentoRepository.getListadoDepartamentos();
  }

  /**
   * Devuelve los departamentos disponibles para seleccionar.
   * @returns Catalogo de departamentos.
  * @precondition El ViewModel debe estar inicializado.
  * @postcondition No modifica el estado del ViewModel.
   */
  get listaDepartamento(): Departamento[] {
    return this._listaDepartamento;
  }

  /**
   * Devuelve el departamento seleccionado actualmente.
   * @returns Departamento seleccionado o null si no hay seleccion.
  * @precondition El ViewModel debe estar inicializado.
  * @postcondition No modifica el estado del ViewModel.
   */
  get depSeleccionado(): Departamento | null {
    return this._depSeleccionado;
  }

  /**
   * Selecciona un departamento y actualiza sus personas asociadas.
   * @param departamento Departamento que se desea seleccionar.
  * @precondition El departamento debe ser una instancia valida del catalogo.
  * @postcondition Se actualizan la lista de personas, el contador y los suscriptores.
   */
  seleccionarDepartamento(departamento: Departamento): void {
    this.depSeleccionado = departamento;
  }

  /**
   * Cambia el departamento seleccionado y recalcula el estado derivado.
   * @param value Nuevo departamento seleccionado o null para limpiar la seleccion.
  * @precondition El valor debe ser un departamento valido o null.
  * @postcondition La seleccion, la lista filtrada y el contador quedan sincronizados.
   */
  set depSeleccionado(value: Departamento | null) {
    this._depSeleccionado = value;
    this.rellenarListadoPersonas();
    this.calcularNumPersonas();
    this.notifyListeners();
  }

  /**
   * Devuelve las personas del departamento seleccionado.
   * @returns Listado filtrado de personas.
  * @precondition El ViewModel debe estar inicializado.
  * @postcondition No modifica el estado del ViewModel.
   */
  get listaPersonasDepartamentos(): Persona[] {
    return this._listaPersonasDepartamentos;
  }

  /**
   * Devuelve el numero de personas del departamento seleccionado.
   * @returns Cantidad de personas filtradas.
  * @precondition El ViewModel debe estar inicializado.
  * @postcondition No modifica el estado del ViewModel.
   */
  get numeroPersonasPorDepartamento(): number {
    return this._numeroPersonasPorDepartamento;
  }

  /**
   * Registra una funcion para recibir avisos cuando cambia el estado.
   * @param listener Funcion que se ejecutara tras un cambio.
   * @returns Funcion para cancelar la suscripcion.
  * @precondition El listener debe ser una funcion valida.
  * @postcondition El listener queda registrado y se devuelve su funcion de cancelacion.
   */
  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Rellena el listado de personas usando el departamento seleccionado.
  * @precondition La seleccion debe ser un departamento valido o null.
  * @postcondition La lista contiene solo personas del departamento seleccionado.
   */
  private rellenarListadoPersonas(): void {
    this._listaPersonasDepartamentos = this._depSeleccionado
      ? PersonaRepository.getListadoPersonasPorDepartamento(this._depSeleccionado.id)
      : [];
  }

  /**
   * Calcula la cantidad de personas filtradas para el departamento actual.
  * @precondition La lista de personas debe estar actualizada.
  * @postcondition El contador coincide con la longitud de la lista filtrada.
   */
  private calcularNumPersonas(): void {
    this._numeroPersonasPorDepartamento = this._listaPersonasDepartamentos.length;
  }

  /**
   * Notifica a las vistas suscritas que el estado ha cambiado.
  * @precondition Los listeners registrados deben ser funciones validas.
  * @postcondition Todos los listeners reciben una notificacion.
   */
  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}
