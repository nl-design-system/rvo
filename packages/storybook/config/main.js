/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    postcss: false,
  },
  addons: [
    '@etchteam/storybook-addon-status',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@whitespace/storybook-addon-html/register',
  ],
};
