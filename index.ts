import { parseForESLint } from '@typescript-eslint/parser';
import type { TSESTree } from '@typescript-eslint/types';
import { typeMatchesSpecifier } from '@typescript-eslint/type-utils';

const mapToObj = <T>(arr: T[], fn: (item: T) => [string, unknown]) =>
		Object.fromEntries(arr.map(fn)),
	name = `URL`;

console.log(
	mapToObj(['tsconfig', 'tsconfig.no-dom'], tsconfig => {
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/type-utils/tests/TypeOrValueSpecifier.test.ts#L127
		const { ast, services } = parseForESLint(`type Test = ${name};`, {
				disallowAutomaticSingleRunInference: true,
				project: `./${tsconfig}.json`,
				filePath: `${import.meta.dirname}/index.ts`
			}),
			program = services.program!;
		return [
			tsconfig,
			mapToObj(
				[
					{ from: `package`, name, package: `node` },
					{ from: `lib`, name }
				] as const,
				specifier => [
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
				]
			)
		];
	})
);
