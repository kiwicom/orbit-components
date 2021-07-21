// @noflow
/* eslint-disable no-param-reassign */
const babel = require("@babel/core");
const PluginError = require("plugin-error");
const transform = require("through2").obj;

module.exports = function gulpBabel(config) {
  return transform(async (file, enc, cb) => {
    try {
      if (file.isBuffer()) {
        const result = await babel.transformAsync(file.contents.toString(), {
          filename: file.path,
          ...config,
        });
        file.contents = Buffer.from(result.code);
      }
      cb(null, file);
    } catch (err) {
      cb(new PluginError("gulp-babel", err));
    }
  });
};
