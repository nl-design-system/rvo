const minorConfig = require("./.ncurc.minor.cjs");

module.exports = {
  reject: [
    ...minorConfig.reject,
    ...Object.keys({
      // Docusaurus needs a migration
      "@docusaurus/core": "2.2.0",
      "@docusaurus/eslint-plugin": "2.2.0",
      "@docusaurus/module-type-aliases": "2.2.0",
      "@docusaurus/preset-classic": "2.2.0",
      "@docusaurus/theme-classic": "2.2.0",
      "@docusaurus/theme-common": "2.2.0",
      "@docusaurus/types": "2.2.0",
      "@mdx-js/react": "1.6.22",
      "@tsconfig/docusaurus": "1.0.7",
      "prism-react-renderer": "1.3.5",

      // Nx needs a migration
      "@nrwl/cli": "15.9.3",
      "@nrwl/nx-cloud": "16.5.2",
      "@nrwl/web": "17.2.8",
      "@nrwl/workspace": "17.2.8",
      nx: "14.5.10",

      // Prettier 3 is async, needs a refactoring
      prettier: "3.1.1",
    }),
  ],
};

console.log(`Reject major updates of:\n\n${module.exports.reject.join("\n")}`);
