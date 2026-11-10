import { Persona } from "@/domain/entities/Persona";

const COLORES = ["#E6A65D", "#8CC8C0", "#F08A7E", "#A9B7E8", "#D6A4D8", "#A8C98D", "#F2C572"];

export class PersonaConColor {
  private readonly _id: number;
  private _nombre: string;
  private _apellidos: string;
  private _fechaNacimiento: Date;
  private readonly _color: string;

  constructor(persona: Persona, posicion: number) {
    this._id = persona.id;
    this._nombre = persona.nombre;
    this._apellidos = persona.apellidos;
    this._fechaNacimiento = persona.fechaNacimiento;
    this._color = this.asignarColor(posicion);
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  set apellidos(apellidos: string) {
    this._apellidos = apellidos;
  }

  get fechaNacimiento(): Date {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(fechaNacimiento: Date) {
    this._fechaNacimiento = fechaNacimiento;
  }

  get color(): string {
    return this._color;
  }

  private asignarColor(posicion: number): string {
    return COLORES[posicion % COLORES.length];
  }
}
