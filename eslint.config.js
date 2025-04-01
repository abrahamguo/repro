import { execSync } from "node:child_process";

import svelteEslintParser from "svelte-eslint-parser";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
  {
    plugins: { "@typescript-eslint": typescriptEslint.plugin },
    rules: { "@typescript-eslint/no-unsafe-member-access": `error` },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: { project: `./tsconfig.json` },
    },
  },
  {
    files: [`*.svelte`],
    languageOptions: {
      parser: svelteEslintParser,
      parserOptions: { parser: `typescript-eslint-parser-for-extra-files` },
    },
  },
);

console.log(
  `${execSync(`npx tsc --listFilesOnly`)}`
    .split(`\n`)
    .filter(Boolean)
    .map((file) => file.replace(`${import.meta.dirname}/`, ``))
    .filter((file) => !file.startsWith(`node_modules/`)),
);
