import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

tseslint.config(...new FlatCompat().config({}));
