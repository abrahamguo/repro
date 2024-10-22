import tseslint from 'typescript-eslint';

const rules = Object.fromEntries(
	Object.entries({
		consistentTypeImports: { prefer: 'no-type-imports' },
		consistentTypeDefinitions: 'type',
		noUnusedExpressions: { enforceForJSX: true }
	}).map(([ruleName, options]) => [
		`@typescript-eslint/${ruleName}`,
		['error', options]
	])
);
export default tseslint.config({ rules });
