import { createRoot } from "react-dom/client";
import Heading from "./Heading.tsx";

createRoot(document.querySelector(`div`)!).render(
  <Heading>Hello world!</Heading>,
);
