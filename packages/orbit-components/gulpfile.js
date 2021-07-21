// @noflow
/* eslint-disable no-use-before-define */
const gulp = require("gulp");
const rename = require("gulp-rename");
const flowgen = require("flowgen");
const globby = require("globby");
const fsx = require("fs-extra");
const del = require("del");
const execa = require("execa");

const babel = require("./utils/gulp-babel");

const compileLibrary = gulp.parallel(compileLibraryModules, compileLibraryBundle);
const buildTypeDeclarations = gulp.series(
  buildTypeDeclarationsFromTemplates,
  copyTypeDeclarations,
  buildTypeScriptDeclarations,
  buildFlowDeclarations,
);

module.exports = {
  buildIconComponents,
  buildTypeDeclarationsFromTemplates,
  build: gulp.series(
    clean,
    buildIconComponents,
    gulp.parallel(gulp.series(compileLibrary, buildTypeDeclarations), buildIconFont, copyMiscFiles),
  ),
};

async function clean() {
  await del([
    "lib",
    "es",
    "umd",
    "src/icons/*.{js,flow}",
    "orbit-icons-font",
    "orbit-icons-font.zip",
    "orbit-svgs.zip",
    ".out",
  ]);
  await Promise.all([fsx.mkdirp("lib"), fsx.mkdirp("es")]);
}

async function buildIconComponents() {
  await cmd("babel-node config/build.js");
}

async function buildIconFont() {
  await cmd("babel-node config/createSVGFont.js");
  await cmd("zip -r orbit-svgs.zip src/icons/svg");
  await cmd("zip -j orbit-svgs.zip orbit-icons-font/orbit-icons.svg");
  await cmd("zip -r orbit-icons-font.zip orbit-icons-font");
}

function libraryStream() {
  return gulp.src("src/**/*.{js,jsx,ts,tsx}", {
    ignore: [
      "**/*.d.ts",
      "**/*.stories.*",
      "**/*.test.*",
      "**/__tests__/**/*",
      "**/__typetests__/**/*",
      "**/__examples__/*.*",
      "**/examples.*",
    ],
  });
}
function compileLibraryModules() {
  return libraryStream()
    .pipe(babel({ envName: "esm" }))
    .pipe(rename({ extname: ".js" }))
    .pipe(gulp.dest("es"))
    .pipe(babel({ babelrc: false, plugins: ["@babel/plugin-transform-modules-commonjs"] }))
    .pipe(gulp.dest("lib"));
}
async function compileLibraryBundle() {
  await cmd("webpack --mode=production");
}

async function buildTypeDeclarationsFromTemplates() {
  await cmd("babel-node config/typeFiles.js");
}

function copyTypeDeclarations() {
  return gulp
    .src(["src/**/*.d.ts", "!src/typings/**/*.d.ts", "src/**/*.js.flow"])
    .pipe(gulp.dest("lib"))
    .pipe(gulp.dest("es"));
}

async function buildTypeScriptDeclarations() {
  await del("tsconfig.tsbuildinfo"); // reset potential incremental compilation information
  await cmd("tsc");
}

async function buildFlowDeclarations() {
  const tsDeclarations = await globby("lib/**/*.d.ts");
  await Promise.all(
    tsDeclarations.map(async tsFilePath => {
      const flowFilePath = tsFilePath.replace(".d.ts", ".js.flow");
      if (await fsx.pathExists(flowFilePath)) return;
      try {
        const flowDecl = await flowgen.compiler.compileDefinitionFile(tsFilePath, {
          interfaceRecords: true,
        });
        const content = `// @flow\n${flowgen.beautify(
          flowDecl
            .replace("import React from", "import * as React from")
            .replace("React.FC", "React.StatelessFunctionalComponent"),
        )}`;
        await Promise.all([
          fsx.writeFile(flowFilePath, content),
          fsx.writeFile(flowFilePath.replace(/^lib/, "es"), content),
        ]);
      } catch (err) {
        err.message = `Failed to create a Flow libdef\n${__dirname}/${tsFilePath}\n${err.message}`;
        throw err;
      }
    }),
  );
}

function copyMiscFiles() {
  return gulp.src(["src/**/*.md", "src/**/*.json"]).pipe(gulp.dest("lib")).pipe(gulp.dest("es"));
}

function cmd(command) {
  return execa.command(command, { stdio: "inherit" });
}
