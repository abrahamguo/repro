import Heading from "./Heading";
import { Node } from "./nodes.ts";

type NodeSwitchProps = { node?: Node; nodes?: Node[] };

export default function NodeSwitch(_: NodeSwitchProps) {
  const node = _.node;
  const nodes = _.nodes;

  if (nodes) {
    return nodes.map((child, index) => <NodeSwitch key={index} node={child} />);
  }

  if (node) {
    if (node.type === "text") {
      return node.text;
    }
    if (node.type === "element") {
      if (node.type && nodeMapper[node.type]) {
        return nodeMapper[node.type]({ node: node });
      }
    }
  }

  // Unknown node type/format:
  return JSON.stringify(node ?? nodes ?? undefined);
}

type NodeComponent<P extends object = {}> = (
  p: { node?: Node } & P,
) => React.ReactNode;

/** Map Node.type to its NodeComponent function. */
const nodeMapper: Record<string, NodeComponent> = {
  heading: Heading,
  h: Heading,
  // Others nodes/components...
};
// ^^^ This is the object causing the ref errors.
