const globby = require("globby");
const fs = require("fs-extra");
const path = require("path");
const { format } = require("prettier");
const parserTypeScript = require("prettier/parser-typescript");

const { getScope, omitTypes } = require("./helpers");

module.exports = async ({ actions, createNodeId, createContentDigest }, { path: folder }) => {
  const { createNode } = actions;
  const files = await globby(`${folder}/**/*.tsx`);

  files.forEach(file => {
    const { name } = path.parse(file);

    const exampleFolder = path.dirname(file).split("/").slice(-1).join("").toLowerCase();
    const content = fs.readFileSync(file, "utf-8");
    const id = [exampleFolder, "-", name.toLowerCase()].join("");
    const example = content.match(/(?<=example:)([\s\S]*)(?=,+[\W]+info)/gim);
    const scope = getScope(content);
    const code = format(omitTypes(example[0]), {
      parser: "typescript",
      plugins: [parserTypeScript],
    });

    const data = {
      example_id: id,
      example: code,
      absolutePath: file,
      scope,
    };

    createNode({
      ...data,
      id: createNodeId(`example-${data.example_id}`),
      parent: null,
      children: [],
      internal: {
        type: `Example`,
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    });
  });
};
