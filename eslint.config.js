import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react"; // Added

export default [ // Changed from tseslint.config
  { ignores: ["dist"] },
  {
    // extends: [js.configs.recommended, ...tseslint.configs.recommended], // Modified
    // files: ["**/*.{ts,tsx}"], // Modified below
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module", // Added
      globals: { ...globals.browser, process: "readonly" }, // Added process
      parserOptions: { // Added
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react": reactPlugin, // Added
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // "@typescript-eslint/no-unused-vars": "off", // Removed
      ...reactPlugin.configs.recommended.rules, // Added
      "no-unused-vars": "warn", // Added basic JS rule for unused vars
    },
    settings: { // Added
      react: {
        version: "detect",
      },
    }
  },
  // Specific configuration for JS and JSX files
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended], // js.configs.recommended applied specifically here
  }
];
