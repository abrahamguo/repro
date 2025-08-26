import { parseForESLint } from "svelte-eslint-parser";

console.log(
  Object.fromEntries(
    [``, `: number`].map((append) => {
      const statement = `let b${append};`;
      return [
        statement,
        parseForESLint(
          `<script lang='ts'></script><input onchange={e => {e; ${statement}}} />`,
          { parser: `@typescript-eslint/parser` },
        )._virtualScriptCode.trim(),
      ];
    }),
  ),
);
