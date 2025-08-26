import { parseForESLint } from "svelte-eslint-parser";

console.log(
  parseForESLint(`<script lang='ts'></script><input onchange={e => e} />`),
);
