// @noflow

module.exports = {
  "*.{js,jsx,flow,ts,tsx}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "*.mdx": "eslint --fix --report-unused-disable-directives",
  "**/!(snippets)/*.mdx": "remark -qf -u validate-links --no-config",
  "packages/orbit-components/**/*.svg": "yarn orbit-components check:icons",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
  "**/__examples__/**/*.js": () => ["lerna run --scope @kiwicom/orbit-components build:examples"],
};
