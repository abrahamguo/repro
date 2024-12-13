import { Node } from './nodes';
import NodeSwitch from './NodeSwitch';

type HeadingProps = { node?: Node, level?: string | number, children?: React.ReactNode };

function parseHeadingLevel(level: string | number | undefined) {
	if (level !== undefined) {
		if ([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6'].includes(level)) {
			return level;
		}
	}
	return undefined;
}

export default function Heading(p: HeadingProps) {
	const level = (parseHeadingLevel(p.node?.attributes?.level ?? p.level) ?? 1).toString();

	const children = p.node !== undefined ? <NodeSwitch nodes={p.node?.children} /> : p.children;

	switch (level) {
		case '1':
			return <h1>{children}</h1>;
		case '2':
			return <h2>{children}</h2>;
		case '3':
			return <h3>{children}</h3>;
		case '4':
			return <h4>{children}</h4>;
		case '5':
			return <h5>{children}</h5>;
		case '6':
			return <h6>{children}</h6>;
		default:
			return <h1>{children}</h1>;
	}
}