import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tsEslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

/** @type {import('eslint').Linter.Config} */
const eslintConfigOptions = {
  files: ["eslint.config.mjs"],
  rules: {
    "import/no-unresolved": "off",
  },
};

const postCSSConfig = {
  files: ["postcss.config.js"],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
  },
  languageOptions: {
    globals: globals.commonjs,
  },
};

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser,
    },
  },
  eslintConfigOptions,
  postCSSConfig,
];
