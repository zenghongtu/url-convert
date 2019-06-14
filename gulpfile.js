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
      return bundle.write({
        file: "./dist/library.js",
        format: "umd",
        name: "library",
        sourcemap: true
      });
    });
});

const build = gulp.series("build");
gulp.task("default", build);
