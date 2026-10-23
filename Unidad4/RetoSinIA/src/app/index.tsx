import { TareasVM } from "@/viewmodel/TareasVM";
import TareasView from "@/views/TareasView";
import { useState } from "react";

export default function Index() {
  const [viewModel] = useState(() => new TareasVM());

  return <TareasView viewModel = {viewModel}/>;
}