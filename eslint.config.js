import { ESLint } from "eslint";

new ESLint({ overrideConfig: [] })
  .calculateConfigForFile(import.meta.filename)
  .then(({ rules }) => console.log(rules));

export default [{ rules: { semi: "error" } }];
