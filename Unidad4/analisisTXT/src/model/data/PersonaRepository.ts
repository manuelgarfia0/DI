import { Persona } from "@/model/entities/Persona";

const nombres = [
  "Lucia", "Mateo", "Sofia", "Daniel", "Valeria", "Hugo", "Clara", "Andres", "Elena", "Pablo",
  "Marta", "Jorge", "Irene", "Alvaro", "Nora", "Ruben", "Eva", "Alberto", "Laura", "Mario",
];

const apellidos = [
  "Garcia", "Martinez", "Navarro", "Sanchez", "Diaz", "Romero", "Molina", "Vega", "Castro", "Ortega",
  "Iglesias", "Crespo", "Santos", "Prieto", "Blanco", "Duran", "Marin", "Gil", "Rios", "Cano",
];

const NUMERO_DEPARTAMENTOS = 15;
const PERSONAS_POR_DEPARTAMENTO = 20;

const personas = Array.from(
  { length: NUMERO_DEPARTAMENTOS * PERSONAS_POR_DEPARTAMENTO },
  (_, index) => {
    const idDepartamento = Math.floor(index / PERSONAS_POR_DEPARTAMENTO) + 1;
    const indicePersona = index % PERSONAS_POR_DEPARTAMENTO;
    const indiceApellido = (indicePersona + idDepartamento * 3) % apellidos.length;

    return new Persona(
      index + 1,
      nombres[indicePersona],
      apellidos[indiceApellido],
      idDepartamento,
    );
  },
);

export class PersonaRepository {
  /**
   * Obtiene las personas pertenecientes a un departamento.
   * @param idDepartamento Identificador del departamento que se consulta.
   * @returns Personas filtradas por departamento.
  * @precondition El identificador del departamento debe existir o ser un valor numerico valido.
  * @postcondition Devuelve un nuevo listado sin modificar el repositorio.
   */
  public static getListadoPersonasPorDepartamento(idDepartamento: number): Persona[] {
    return personas.filter((persona) => persona.idDepartamento === idDepartamento);
  }

  /**
   * Obtiene una copia del listado completo de personas.
   * @returns Todas las personas de la organizacion.
  * @precondition El repositorio debe estar disponible.
  * @postcondition Devuelve una copia del listado sin exponer la coleccion interna.
   */
  public static getListadoCompletoPersonas(): Persona[] {
    return [...personas];
  }
}
