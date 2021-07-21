// @noflow

module.exports = {
  extends: "../../babel.config",
  presets: [["@babel/preset-react", { runtime: "classic" }]],
  plugins: ["babel-plugin-styled-components"],
};
