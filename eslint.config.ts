import css from "@eslint/css";
import eslintJs from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.tsx"],

    // Extend recommended rule sets from:
    // 1. ESLint JS's recommended rules
    // 2. TypeScript ESLint recommended rules
    // 3. ESLint React's recommended-typescript rules
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
    ],

    // Configure language/parsing options
    languageOptions: {
      // Use TypeScript ESLint parser for TypeScript files
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better TypeScript integration
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    // Custom rule overrides (modify rule levels or disable rules)
    rules: {
      "@eslint-react/error-boundaries": "error",
      "@eslint-react/exhaustive-deps": "error",
      "@eslint-react/no-missing-key": "error",
      "@eslint-react/immutability": "error",
      "@eslint-react/no-array-index-key": "error",
      "@eslint-react/set-state-in-effect": "error",
      "@eslint-react/rules-of-hooks": "error",
      "@eslint-react/set-state-in-render": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },

    plugins: {
      "simple-import-sort": simpleImportSort,
    },

    ignores: ["src/assets/**", "src/framework/**"],
  },
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
      "css/no-empty-blocks": "error",
      "css/no-invalid-properties": "error",
    },
  },
]);
