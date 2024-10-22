import tseslint from 'typescript-eslint';

const rules = Object.fromEntries(
	Object.entries({
		consistentTypeImports: { prefer: 'no-type-imports' },
		consistentTypedDefinitions: 'type',
		noUnusedExpressions: { enforceForJSX: true }
	}).map(([ruleName, options]) => [ruleName, ['error', options]])
);
tseslint.config({ rules });
