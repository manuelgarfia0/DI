import { useState } from "react";

import { FAQ_CATALOG } from "@/model/data/FaqCatalog";
import FaqAccordionView from "@/views/FaqAccordionView";
import { FaqAccordionViewModel } from "@/viewmodel/FaqAccordionViewModel";

export default function Index() {
  const [viewModel] = useState(() => new FaqAccordionViewModel(FAQ_CATALOG));

  return <FaqAccordionView viewModel={viewModel} />;
}
