import tseslint from 'typescript-eslint';

const rules = Object.fromEntries(
	Object.entries({
		'consistent-type-imports': { prefer: 'no-type-imports' },
		'consistent-type-definitions': 'type',
		'no-unused-expressions': { enforceForJSX: true }
	}).map(([ruleName, options]) => [
		`@typescript-eslint/${ruleName}`,
		['error', options] as const
	])
);

export default tseslint.config({
	plugins: { '@typescript-eslint': tseslint.plugin },
	rules
});
