import { plugin, parser } from 'typescript-eslint';

export default {
	files: ['*.ts'],
	languageOptions: { parser, parserOptions: { project: true } },
	plugins: { '@typescript-eslint': plugin },
	rules: { '@typescript-eslint/restrict-template-expressions': 'error' }
};
