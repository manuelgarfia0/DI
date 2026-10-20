import { useState } from "react";

import CochesView from "@/views/CochesView";
import { CochesVM } from "@/viewmodel/CochesVM";

export default function Index() {
  const [viewModel] = useState(() => new CochesVM());

  return <CochesView viewModel={viewModel} />;
}
