import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Next 16 removed `next lint`. This rule is new in the flat config and
      // flags effects that were already on the site, including the disclaimer gate.
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/**",
      ".temp-hash-gen.mjs",
      "READING_ROOM_PASSWORD_HASH.txt",
    ],
  },
];

export default eslintConfig;
