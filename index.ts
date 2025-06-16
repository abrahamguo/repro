import { Linter } from "eslint";
import tseslint from "typescript-eslint";

declare const x: Linter.Config;

tseslint.config(x);
