exports.createPages = require("./gatsby/on-create-page");
exports.sourceNodes = require("./gatsby/on-source-nodes");
exports.onCreateNode = require("./gatsby/on-create-node");
exports.createSchemaCustomization = require("./gatsby/create-schema-customization");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  });
};
