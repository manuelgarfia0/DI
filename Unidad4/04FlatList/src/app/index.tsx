import { useState } from "react";

import { PersonasRepository } from "@/model/data/PersonasRepository";
import PersonasView from "@/views/PersonasView";
import { PersonasViewModel } from "@/viewmodel/PersonasViewModel";

export default function Index() {
  const [viewModel] = useState(() => new PersonasViewModel(new PersonasRepository()));

  return <PersonasView viewModel={viewModel} />;
}
