import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  tseslint.config(
    { ignores: ["**/*.config.*"] },
    {
      files: ["**/*.js", "**/*.ts", "**/*.tsx"],
      plugins: {
        import: importPlugin,
        react: reactPlugin,
        "react-hooks": hooksPlugin,
      },
      extends: [
        ...eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      ],
      rules: {
        ...reactPlugin.configs["jsx-runtime"].rules,
        ...hooksPlugin.configs.recommended.rules,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "type-imports", fixStyle: "separate-type-imports" },
        ],
        "@typescript-eslint/no-misused-promises": [
          2,
          { checksVoidReturn: { attributes: false } },
        ],
        "@typescript-eslint/no-unnecessary-condition": [
          "error",
          {
            allowConstantLoopConditions: true,
          },
        ],
        "@typescript-eslint/no-non-null-assertion": "error",
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      },
    },
    {
      linterOptions: { reportUnusedDisableDirectives: true },
      languageOptions: {
        parserOptions: { projectService: true },
        globals: { React: "writable" },
      },
    },
  ),
];
