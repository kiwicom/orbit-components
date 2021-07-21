module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query ExamplesQuery {
      allExample {
        nodes {
          id
          example
          example_id
          scope {
            name
            path
            default
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error when querying examples.`);
    return;
  }

  result.data.allExample.nodes.forEach(({ id, example, example_id, scope }) => {
    if (!example) return;

    createPage({
      path: `examples/${example_id.toLowerCase()}`,
      component: `${process.cwd()}/src/templates/sandbox/index.tsx`,
      context: { id, example, example_id, scope },
    });

    createPage({
      path: `examples/${id}`,
      component: `${process.cwd()}/src/templates/sandbox/PureSandbox.tsx`,
      context: { id, example, example_id, scope },
    });
  });
};
