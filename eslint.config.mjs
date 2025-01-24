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
      // Disable 'no-explicit-any' rule
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable the 'no-var' rule
      "no-var": "off",
      
      // Change 'react-hooks/exhaustive-deps' to a warning instead of an error
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
