import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      ...tseslint.configs.recommended,
      ...tailwind.configs["flat/recommended"],
    ],
    files: ["*/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "warn",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              group: "builtin",
              pattern: "{react,react-dom/**}",
              position: "before",
            },
            {
              group: "internal",
              pattern: "{@/**}",
              position: "before",
            },
            {
              group: "internal",
              pattern: "{#/**}",
              position: "before",
            },
            {
              group: "sibling",
              pattern: "{./**}",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: [
            "./tsconfig.json",
            "./tsconfig.app.json",
            "./tsconfig.node.json",
          ]
        },
        alias: {
          map: [
            ['', './public'],
          ],
        },
      },
    },
  }
);
