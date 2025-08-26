import { format } from "prettier";
import { parseForESLint } from "svelte-eslint-parser";

console.log(
  await format(
    parseForESLint(
      `<script lang='ts'></script><input onchange={e => {e; let b: number;}} />`,
      {
        parser: `@typescript-eslint/parser`,
      },
    )._virtualScriptCode,
    { parser: `typescript` },
  ),
);
