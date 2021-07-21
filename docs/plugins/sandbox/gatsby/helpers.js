const { types: t, traverse } = require("@babel/core");
const { parse } = require("@babel/parser");
const { default: generate } = require("@babel/generator");

const getCode = str =>
  parse(str, {
    sourceType: "module",
    plugins: ["typescript", "jsx"],
  });

const getScope = example => {
  const scope = [];

  getCode(example).program.body.forEach(n => {
    if (t.isImportDeclaration(n)) {
      const p = n.source.value;
      if (n.source.value.match(/@kiwicom\/orbit-components|styled-components/)) {
        n.specifiers.forEach(s => {
          if (t.isImportDefaultSpecifier(s)) {
            if (t.isIdentifier(s.local)) scope.push({ name: s.local.name, path: p, default: true });
          }

          if (t.isImportSpecifier(s)) {
            if (t.isIdentifier(s.imported))
              scope.push({ name: s.imported.name, path: p, default: false });
          }
        });
      }
    }
  });

  return scope;
};

/* react-live can't have types inside example, this helper removes the types for react-live */
const omitTypes = example => {
  const ast = getCode(example);

  traverse(ast, {
    TSTypeAnnotation: path => {
      path.remove();
    },

    TSTypeParameterInstantiation: path => {
      path.remove();
    },
  });

  const { code } = generate(ast);
  return code;
};

module.exports = {
  getScope,
  omitTypes,
};
