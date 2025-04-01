import parser from "svelte-eslint-parser";
import { config } from "typescript-eslint";

export default config({ languageOptions: { parser } });
