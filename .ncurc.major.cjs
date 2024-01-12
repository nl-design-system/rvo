const minorConfig = require("./.ncurc.minor.cjs");

module.exports = {
  reject: [
    ...minorConfig.reject,
    ...Object.keys({      
      "@docusaurus/core": "2.2.0",
      "@docusaurus/core": "2.2.0",
      "@docusaurus/eslint-plugin": "2.2.0",
      "@docusaurus/eslint-plugin": "2.2.0",
      "@docusaurus/module-type-aliases": "2.2.0",
      "@docusaurus/module-type-aliases": "2.2.0",
      "@docusaurus/preset-classic": "2.2.0",
      "@docusaurus/preset-classic": "2.2.0",
      "@docusaurus/theme-classic": "2.2.0",
      "@docusaurus/theme-classic": "2.2.0",
      "@docusaurus/theme-common": "2.2.0",
      "@docusaurus/theme-common": "2.2.0",
      "@docusaurus/types": "2.2.0",
      "@docusaurus/types": "2.2.0",
      "@mdx-js/react": "1.6.22",
      "@mdx-js/react": "1.6.22",
    "@tsconfig/docusaurus": "1.0.7",
      "nx": "14.5.10",
    })
  ],
};
console.log(module.exports)