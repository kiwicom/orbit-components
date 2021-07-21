// @noflow
module.exports = api => {
  api.assertVersion(7);
  return {
    presets: [["@babel/preset-env", { modules: api.env("esm") ? false : "cjs", bugfixes: true }]],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      "@adeira/babel-preset-adeira/src/adeira-js-warning",
      "@adeira/babel-preset-adeira/src/adeira-js-invariant",
      ["@babel/plugin-transform-runtime", { useESModules: api.env("esm") }],
    ],
    env: {
      test: {
        plugins: ["babel-plugin-require-context-hook"],
      },
    },
    overrides: [
      {
        test: /\.jsx?$/,
        presets: ["@babel/preset-flow"],
      },
      {
        test: /\.tsx?$/,
        presets: ["@babel/preset-typescript"],
      },
    ],
  };
};
