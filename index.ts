import { parseForESLint } from '@typescript-eslint/parser';
import type { TSESTree } from '@typescript-eslint/types';
import path from 'path';

import { typeMatchesSpecifier } from '@typescript-eslint/type-utils';

const { ast, services } = parseForESLint('type Test = URL;', {
	disallowAutomaticSingleRunInference: true,
	project: './tsconfig.json',
	filePath: `${import.meta.dirname}/index.ts`
});
console.log(
	(
		[
			{ from: 'package', name: 'URL', package: 'node' },
			{ from: 'lib', name: 'URL' },
		] as const
	).map(specifier =>
		typeMatchesSpecifier(
			services
				.program!.getTypeChecker()
				.getTypeAtLocation(
					services.esTreeNodeToTSNodeMap.get(
						(ast.body[ast.body.length - 1] as TSESTree.TSTypeAliasDeclaration)
							.id,
					),
				),
			specifier,
			services.program!,
		),
	),
);
