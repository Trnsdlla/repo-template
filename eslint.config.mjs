import globals from "globals";
import pluginJs from "@eslint/js";
// import someConfig from "some-other-config-you-use";
// import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  someConfig,
  eslintConfigPrettier,
];