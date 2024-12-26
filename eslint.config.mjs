import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Customize or disable @typescript-eslint/no-unused-vars
      "@typescript-eslint/no-unused-vars": [
        "warn", // Change to "error" or "off" if needed
        {
          vars: "all", // Check all variables
          args: "after-used", // Only check function arguments used after the last one
          ignoreRestSiblings: true, // Ignore unused sibling variables in rest destructuring
          varsIgnorePattern: "^_", // Ignore variables prefixed with an underscore
        },
      ],
    },
  },
];

export default eslintConfig;
