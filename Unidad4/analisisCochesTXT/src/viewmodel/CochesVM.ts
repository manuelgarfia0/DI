import { MarcaCoche } from "@/model/entities/MarcaCoche";
import { ModeloMarca } from "@/model/entities/ModeloMarca";
import { MarcaCocheRepository } from "@/model/data/MarcaCocheRepository";
import { ModeloMarcaRepository } from "@/model/data/ModeloMarcaRepository";

type Listener = () => void;

export class CochesVM {
  private readonly _listadoMarcas: MarcaCoche[];
  private _marcaSeleccionada: MarcaCoche | null = null;
  private _listadoModelos: ModeloMarca[] = [];
  private _modeloSeleccionado: ModeloMarca | null = null;
  private _version = 0;
  private readonly listeners = new Set<Listener>();

  constructor() {
    this._listadoMarcas = MarcaCocheRepository.getListadoMarcasCoches();
  }

  get listadoMarcas(): MarcaCoche[] {
    return this._listadoMarcas;
  }

  get marcaSeleccionada(): MarcaCoche | null {
    return this._marcaSeleccionada;
  }

  set marcaSeleccionada(marca: MarcaCoche | null) {
    this._marcaSeleccionada = marca;
    this._listadoModelos = marca ? ModeloMarcaRepository.getListadoModeloPorMarca(marca.id) : [];
    this._modeloSeleccionado = null;
    this.notifyListeners();
  }

  get listadoModelos(): ModeloMarca[] {
    return this._listadoModelos;
  }

  get version(): number {
    return this._version;
  }

  set listadoModelos(modelos: ModeloMarca[]) {
    this._listadoModelos = modelos;
    this.notifyListeners();
  }

  get modeloSeleccionado(): ModeloMarca | null {
    return this._modeloSeleccionado;
  }

  set modeloSeleccionado(modelo: ModeloMarca | null) {
    this._modeloSeleccionado = modelo;
    this.notifyListeners();
  }

  subscribe = (listener: Listener): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  volverAMarcas(): void {
    this.marcaSeleccionada = null;
  }

  volverAModelos(): void {
    this.modeloSeleccionado = null;
  }

  seleccionarMarca(marca: MarcaCoche): void {
    this.marcaSeleccionada = marca;
  }

  seleccionarModelo(idModelo: number): void {
    this.modeloSeleccionado = ModeloMarcaRepository.getModelo(idModelo);
  }

  private notifyListeners(): void {
    this._version += 1;
    this.listeners.forEach((listener) => listener());
  }
}