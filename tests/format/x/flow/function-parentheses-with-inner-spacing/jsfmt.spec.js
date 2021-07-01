// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

// [FUTURE TBD] use Nodejs path function (...)
const dirPath = `${__dirname}/../../../flow/function-parentheses`;

// [prettierx] test with --paren-spacing, only with defaults
// including arrowParens: "avoid"
// (note that this combination is **not** recommended)
run_spec(dirPath, ["flow", "babel", "babel-flow"], {
  spaceInParens: true,
  typeAngleBracketSpacing: true,
});
