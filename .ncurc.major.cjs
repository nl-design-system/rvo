const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // Docusaurus needs a migration
    '@docusaurus/*',
    '@mdx-js/react',
    '@tsconfig/docusaurus',
    'prism-react-renderer',
    // Prettier 3 is async, needs a refactoring
    'prettier',
    // Storybook v8 needs a refactoring
    'storybook',
    '@storybook/*',
  ],
  target: 'latest',
};

console.log(`Reject major updates of:\n\n${module.exports.reject.join('\n')}`);
