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
