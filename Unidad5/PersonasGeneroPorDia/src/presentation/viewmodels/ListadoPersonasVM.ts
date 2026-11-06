import { Persona } from "@/domain/entities/Persona";
import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";

/**
 * Viewmodel de la pantalla de listado.
 *
 * Precondicion: recibe un caso de uso valido mediante inyeccion de dependencias.
 * Postcondicion: expone una lista filtrada y su total para la vista.
 */
export class ListadoPersonasVM {
  private _listaPersonas: Persona[] = [];

  public constructor(private readonly personaUsecase: IPersonaUsecase) {
    this.cargarPersonas();
  }

  public get listaPersonas(): Persona[] {
    return this._listaPersonas;
  }

  public get totalPersonas(): number {
    return this._listaPersonas.length;
  }

  /**
   * Carga la informacion que necesita la vista.
   *
   * Precondicion: el caso de uso debe estar disponible.
   * Postcondicion: la lista contiene el resultado actual del caso de uso.
   */
  private cargarPersonas(): void {
    this._listaPersonas = this.personaUsecase.getListadoPersonasPorSexo();
  }
}
