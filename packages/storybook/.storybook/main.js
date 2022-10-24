/* eslint-env node */
const path = require('path');
const fs = require('fs');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(`Could not find package.json in the parent directories starting from ${filepath}.`);
    }
    currDir = dir;
  }
}

module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: [
    '../../../documentation/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
    '../../../components/**/*stories.@(js|jsx|mdx|ts|tsx|js|jsx)',
  ],
  features: {
    postcss: false,
    previewMdx2: true,
    buildStoriesJson: true,
    modernInlineRender: true,
  },
  framework: '@storybook/react',
  addons: [
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    'storybook-anima',
  ],
  staticDirs: ['../../../proprietary/assets'],
  webpackFinal: async (config) => {
    const scssRule = config.module.rules.find((rule) => rule.test.toString().replace(/\\/g, '') == '/.s[ca]ss$/');
    scssRule.use = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];
    return {
      ...config,
      performance: { hints: false },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    };
  },
};
