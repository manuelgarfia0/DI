import { Departamento } from "@/model/entities/Departamento";

const departamentos = [
  new Departamento(1, "Direccion General"),
  new Departamento(2, "Desarrollo de Software"),
  new Departamento(3, "Producto"),
  new Departamento(4, "Diseno"),
  new Departamento(5, "Marketing"),
  new Departamento(6, "Ventas"),
  new Departamento(7, "Atencion al Cliente"),
  new Departamento(8, "Recursos Humanos"),
  new Departamento(9, "Finanzas"),
  new Departamento(10, "Operaciones"),
  new Departamento(11, "Logistica"),
  new Departamento(12, "Compras"),
  new Departamento(13, "Legal"),
  new Departamento(14, "Investigacion y Desarrollo"),
  new Departamento(15, "Seguridad"),
];

export class DepartamentoRepository {
  /**
   * Obtiene una copia del catalogo completo de departamentos.
   * @returns Todos los departamentos de la organizacion.
  * @precondition El repositorio debe estar disponible.
  * @postcondition Devuelve una copia del catalogo sin exponer la coleccion interna.
   */
  public static getListadoDepartamentos(): Departamento[] {
    return [...departamentos];
  }
}
