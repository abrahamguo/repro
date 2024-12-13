export type Node = {
  type: string; // Usually 'element' or 'text'.
  attributes?: { [key: string]: string };
  text?: string;
  children?: Node[];
};

/** Should render as: `<h3>H3 Heading</h3>` */
export const exampleNode: Node = {
  type: "element",
  attributes: { level: "3" },
  children: [{ type: "text", text: "H3 Heading" }],
};
