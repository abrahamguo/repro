import { createRoot } from "react-dom/client";
import Heading from "./Heading.tsx";
import { exampleNode } from "./nodes.ts";

createRoot(document.querySelector(`div`)!).render(
  <Heading node={exampleNode} />,
);
