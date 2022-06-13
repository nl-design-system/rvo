/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
  ],
  features: {
    postcss: false,
    previewMdx2: true,
  },
  addons: [
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
  ],
  staticDirs: ['../../../proprietary/assets'],
  managerHead: (head, { configType }) => {
    if (configType === 'PRODUCTION') {
      return `
        ${head}
        <base href="/rvo/">
      `;
    }
  },
};
