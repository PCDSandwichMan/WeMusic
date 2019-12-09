module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  // collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**", "!**/vendor/**"]
};
