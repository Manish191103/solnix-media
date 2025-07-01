import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended"
  ),
  // Add Prettier recommended configuration
  // This should be last to override other formatting rules.
  eslintPluginPrettierRecommended,
  {
    // Custom rules can be added here if needed
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js 17+ doesn't require React in scope
      "jsx-a11y/anchor-is-valid": [ // Next.js Link components might not always have href
        "warn",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      // The eslint-plugin-prettier/recommended config sets "prettier/prettier" to "warn" by default.
      // If you want to make Prettier violations an error, uncomment the line below:
      // "prettier/prettier": "error",
    },
  },
];

export default eslintConfig;
