import { useState } from "react";

import DepartamentoPersonaView from "@/views/DepartamentoPersonaView";
import { DepartamentoPersonaVM } from "@/viewmodel/DepartamentoPersonaVM";

/**
 * Construye la pantalla principal y su ViewModel.
 * @returns Vista principal del directorio de personas.
 * @precondition La aplicacion debe tener disponible el enrutador de Expo.
 * @postcondition Devuelve la pantalla principal con un ViewModel inicializado.
 */
export default function Index() {
  const [viewModel] = useState(() => new DepartamentoPersonaVM());

  return <DepartamentoPersonaView viewModel={viewModel} />;
}
