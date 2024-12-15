import eslintPluginReactCompiler from "eslint-plugin-react-compiler";
import "./package.json" with { type: "json" };

export default [
  {
    plugins: { "react-compiler": eslintPluginReactCompiler },
  },
  {
    files: ["*.{js,ts}"],
    rules: { "react-compiler/react-compiler": "error" },
  },
];
