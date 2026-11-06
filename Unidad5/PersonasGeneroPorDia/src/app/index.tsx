import { container } from "@/di/container";
import { ListadoPersonasVM } from "@/presentation/viewmodels/ListadoPersonasVM";
import { ListadoPersonasView } from "@/presentation/views/ListadoPersonasView";

const listadoPersonasVM = container.get(ListadoPersonasVM);

export default function Index() {
  return <ListadoPersonasView viewModel={listadoPersonasVM} />;
}
