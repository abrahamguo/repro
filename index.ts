import { parseForESLint } from '@typescript-eslint/parser';
import type { TSESTree } from '@typescript-eslint/types';
import { typeMatchesSpecifier } from '@typescript-eslint/type-utils';

const { ast, services } = parseForESLint('type Test = URL;', {
	disallowAutomaticSingleRunInference: true,
	project: './tsconfig.json',
	filePath: `${import.meta.dirname}/index.ts`
});
const { program } = services;

console.log(
	Object.fromEntries(
		(
			[
				{ from: 'package', name: 'URL', package: 'node' },
				{ from: 'lib', name: 'URL' }
			] as const
		).map(specifier => [
			specifier.from,
			typeMatchesSpecifier(
				program
					.getTypeChecker()
					.getTypeAtLocation(
						services.esTreeNodeToTSNodeMap.get(
							(ast.body.at(-1) as TSESTree.TSTypeAliasDeclaration).id
						)
					),
				specifier,
				program
			)
		])
	)
);
