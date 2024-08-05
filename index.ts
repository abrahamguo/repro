import tseslint from 'typescript-eslint';
import { fixupConfigRules } from '@eslint/compat';

tseslint.config({ extends: fixupConfigRules([]) });
