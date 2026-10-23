import { Tarea } from "../entities/Tarea";

const tareas = [
    new Tarea(1, "Programación", false), 
    new Tarea(2, "Móviles", false), 
    new Tarea(3, "Videojuegos", false), 
    new Tarea(4, "Inglés", false)
];

export class TareasRepository{
    public static getListadoTareas(): Tarea[]{
        return [...tareas];
    }
}