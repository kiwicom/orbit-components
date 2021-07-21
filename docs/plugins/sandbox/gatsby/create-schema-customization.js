module.exports = ({ actions, schema }) => {
  const { createTypes } = actions;

  const exampleType = schema.buildObjectType({
    name: "Example",
    interfaces: [`Node`],
    fields: {
      example: { type: `String!` },
      example_id: { type: `String!` },
      absolutePath: { type: `String!` },
      scope: {
        type: `[ExampleScope]`,
      },
    },
  });

  createTypes([
    `
    type Knob {
      name: String!
      type: String!
      defaultValue: String!
    }

    type ExampleScope {
      name: String!
      default: String!
      path: String!
    }
  `,
    exampleType,
  ]);
};
