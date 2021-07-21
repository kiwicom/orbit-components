const fs = require("fs-extra");
const path = require("path");

const FILE_NAME = "KNOBS.json";

module.exports = async ({ node, actions, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Example") {
    const { absolutePath, example_id } = node;
    try {
      const knobPath = path.join(path.dirname(absolutePath), FILE_NAME);
      const data = await fs.readFile(knobPath, "utf-8");
      createNodeField({
        node,
        name: "knobs",
        value: JSON.parse({ component: path.parse(path.dirname(absolutePath)).name, ...data }),
      });
    } catch {
      reporter.panicOnBuild(`${example_id} should have KNOBS.json`);
    }
  }
};
