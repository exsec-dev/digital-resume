import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "quotes": [2, "double", "avoid-escape"],
    }
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { project: false }
    }
  },
  ...tseslint.configs.recommended,
];