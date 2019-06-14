const gulp = require("gulp");
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript");

gulp.task("build", () => {
  return rollup
    .rollup({
      input: "./src/main.ts",
      plugins: [rollupTypescript()]
    })
    .then(bundle => {
      bundle.write({
        file: "./dist/index.js",
        format: "umd",
        name: "index",
        sourcemap: true
      });
      bundle.write({
        file: "./dist/index.es.js",
        format: "es",
        name: "index",
        sourcemap: true
      });
      bundle.write({
        file: "./dist/index.cjs.js",
        format: "cjs",
        name: "index",
        sourcemap: true
      });
    });
});

const build = gulp.series("build");
gulp.task("default", build);
