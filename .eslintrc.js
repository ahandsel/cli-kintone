/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
  extends: "@cybozu/eslint-config/presets/node-typescript-prettier",
  rules: {
    curly: ["error", "all"],
    "func-style": ["error"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          object: false,
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
  },
};
module.exports = config;
