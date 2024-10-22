import tseslint from 'typescript-eslint';

const rules = Object.fromEntries(
	Object.entries({
		arrayCallbackReturn: { allowImplicit: true },
		curly: 'multi',
		noConstantCondition: { checkLoops: false },
		noElseReturn: { allowElseIf: false },
		noEmpty: { allowEmptyCatch: true },
		noUnneededTernary: { defaultAssignment: false },
		objectShorthand: ['always', { avoidExplicitReturnArrows: true }],
		oneVar: { initialized: 'never', uninitialized: 'always' },
		requireAwait: []
	}).map(([ruleName, options]) => [ruleName, ['error', options]])
);
export default tseslint.config({ rules });
