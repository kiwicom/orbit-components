// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
// @noflow

module.exports = ({ config }) => {
  config.module.rules.push({
    test: [/\.jsx?$/, /\.tsx?$/],
    use: [
      {
        options: { envName: "esm" },
        loader: "babel-loader",
      },
    ],
    exclude: /node_modules\/(?!(loki)\/).*/, // Loki is not transpilled, throws error in IE 11
  });

  return config;
};
