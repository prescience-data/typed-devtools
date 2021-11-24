require("@rushstack/eslint-config/patch/modern-module-resolution")

module.exports = {
  extends: [
    "@rushstack/eslint-config/profile/node",
    "@rushstack/eslint-config/mixins/friendly-locals",
  ],
  plugins: ["simple-import-sort"],
  ignorePatterns: ["*.js", "*.json", "*.d.ts", "*.map", "lib", "bin", "test"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-return-await": "error",
    "no-duplicate-imports": "off",
    "sort-imports": "off",
    "import/order": "off",
  },
  overrides: [
    {
      files: ["**/dist/*.ts"],
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
    {
      files: ["**/schemas/*.ts", "**/schemas.ts", "**/*schema.ts"],
      rules: {
        "@typescript-eslint/typedef": "off",
      },
    },
  ],
}
