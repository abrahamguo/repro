import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import parser from '@typescript-eslint/parser';

export default {
	files: [`index.jsx`],
	languageOptions: { parser },
	plugins: { 'better-tailwindcss': eslintPluginBetterTailwindcss },
	rules: {
		'max-len': [`error`, { code: 120 }],
		'better-tailwindcss/enforce-consistent-line-wrapping': [
			`error`,
			{ printWidth: 120, group: `never`, indent: `tab` }
		]
	}
};
