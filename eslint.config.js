import parser from "svelte-eslint-parser";
import { config, plugin } from "typescript-eslint";

export default config(
  {
    plugins: { "@typescript-eslint": plugin },
    rules: { "@typescript-eslint/no-unsafe-member-access": `error` },
    languageOptions: { parserOptions: { project: `./tsconfig.json` } },
  },
  // {
  //   files: [`*.svelte`],
  //   languageOptions: {
  //     parser,
  //     parserOptions: { parser: `typescript-eslint-parser-for-extra-files` },
  //   },
  // },
);
