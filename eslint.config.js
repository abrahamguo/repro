import tseslint from 'typescript-eslint';

export default tseslint.config(...tseslint.configs.strictTypeChecked, {
	languageOptions: { parserOptions: { project: true } }
});
