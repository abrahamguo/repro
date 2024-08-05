import { TSESLint } from '@typescript-eslint/utils';
import { FlatCompat } from '@eslint/eslintrc';

declare const classicConfig: TSESLint.ClassicConfig.Config;

new FlatCompat().config(classicConfig);
