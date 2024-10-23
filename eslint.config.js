import functional from 'eslint-plugin-functional';
import parser from '@typescript-eslint/parser';

export default {
	files: ['*.ts'],
	languageOptions: { parser, parserOptions: { project: true } },
	plugins: { functional },
	rules: { 'functional/prefer-tacit': 'error' }
};
