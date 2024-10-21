import tseslint from 'typescript-eslint';

const mapObj = <K extends string, V, T>(
	obj: Record<K, V>,
	fn: (key: K, val: V, i: number) => T
) => Object.entries(obj).map((entry, i) => fn(...(entry as [K, V]), i));

tseslint.config(
	...mapObj(
		{
			[`.js,jsx`]: {
				rules: { 'unicorn/filenameCase': [`error`, { case: `pascalCase` }] }
			}
		},
		(files, overrides) =>
			[overrides]
				.flat()
				.map(override => ({ files: files.split(`,`), ...override }))
	).flat()
);
