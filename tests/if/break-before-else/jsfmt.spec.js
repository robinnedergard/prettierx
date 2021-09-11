// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] test with --break-before-else
  breakBeforeElse: true,
  // recommended:
  trailingComma: "none" // ("Standard JS")
});

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] test with --break-before-else
  breakBeforeElse: true,
  // recommended:
  trailingComma: "none", // ("Standard JS")
  newlineBefore: true,
});
