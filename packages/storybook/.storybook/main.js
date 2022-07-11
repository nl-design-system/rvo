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
    'storybook-anima',
  ],
  staticDirs: [{ from: '../../../proprietary/assets', to: '/rvo' }],
  webpackFinal: async (config) => {
    const scssRule = config.module.rules.find((rule) => rule.test.toString().replace(/\\/g, '') == '/.s[ca]ss$/');
    scssRule.use = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];
    return config;
  },
};
