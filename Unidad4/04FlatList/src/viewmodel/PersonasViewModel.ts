import { repositoryPersonas } from "@/data/repositoryPersonas";
import { Persona } from "@/model/entities/Persona";

type MostrarAlerta = (mensaje: string) => void;

export class PersonasViewModel {
  private _personas: Persona[];
  private _personaSeleccionada: Persona | null = null;
  private readonly _mostrarAlerta: MostrarAlerta;

  constructor(mostrarAlerta: MostrarAlerta) {
    this._personas = repositoryPersonas.obtenerPersonas();
    this._mostrarAlerta = mostrarAlerta;
  }

  get personas(): Persona[] {
    return this._personas;
  }

  set personas(personas: Persona[]) {
    this._personas = personas;
  }

  get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  set personaSeleccionada(persona: Persona | null) {
    this._personaSeleccionada = persona;
  }

  seleccionarPersona(persona: Persona): void {
    this.personaSeleccionada = persona;
    this._mostrarAlerta(`${persona.nombre} ${persona.apellidos}`);
  }
}