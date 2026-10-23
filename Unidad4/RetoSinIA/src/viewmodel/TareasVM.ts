import { Tarea } from "@/model/entities/Tarea";
import { TareasRepository } from "@/model/repositories/TareasRepostory"


export class TareasVM{
    private readonly _listadoTareas: Tarea[];
    private _tareaSeleccionada: Tarea | null = null;

    constructor(){
        this._listadoTareas = TareasRepository.getListadoTareas();
    }

    get listadoTareas(): Tarea[]{
        return this._listadoTareas;
    }
    get tareaSeleccionada(): Tarea | null {
        return this._tareaSeleccionada;
    }

    set tareaSeleccionada(tarea: Tarea | null) {
        this._tareaSeleccionada = tarea;
    }

    seleccionarTarea(tarea: Tarea): Tarea {
    this._tareaSeleccionada = tarea;
    return tarea;
  }
}