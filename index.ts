import { parseForESLint } from '@typescript-eslint/parser';
import type { TSESTree } from '@typescript-eslint/types';
import { typeMatchesSpecifier } from '@typescript-eslint/type-utils';

const mapToObj = <T>(arr: T[], fn: (item: T) => unknown) =>
	Object.fromEntries(
		arr.map(item => [
			typeof item == 'string' ? item : JSON.stringify(item),
			fn(item)
		])
	);

console.log(
	mapToObj([{ lib: ['esnext'] }], lib =>
		mapToObj([`URL`], type => {
			const { ast, services } = parseForESLint(`type Test = ${type};`, {
				disallowAutomaticSingleRunInference: true,
				project: './tsconfig.json',
				filePath: `${import.meta.dirname}/index.ts`
			});
			const program = services.program!;
			return mapToObj(
				[
					{ from: 'package', name: 'URL', package: 'node' },
					{ from: 'lib', name: 'URL' }
				] as const,
				specifier =>
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
			);
		})
	)
);
