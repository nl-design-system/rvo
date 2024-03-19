/* eslint-env node */
import { StorybookConfig } from '@storybook/react-webpack5';
const fs = require('fs');
const path = require('path');
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  // eslint-disable-next-line no-constant-condition
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

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../../../documentation/pages/**/*.docpage.mdx',
    '../../../documentation/demopages/**/*.stories.@(jsx|tsx)',
    '../../../components/**!(node_modules)/*.docpage.mdx',
    '../../../components/**!(node_modules)/*.stories.@(jsx|tsx)',
  ],
  features: {
    buildStoriesJson: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '../addon-docusaurus',
    '@etchteam/storybook-addon-status',
    { name: '@storybook/addon-essentials', options: { actions: false } },
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    'storybook-addon-themes',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
  ],
  staticDirs: ['../../../documentation/demopages/common', '../node_modules/@nl-rvo/assets/'],
  typescript: { check: true, checkOptions: {} },
  webpackFinal: async (config) => {
    const scssRule = config.module.rules.find(
      (rule: any) => rule.test.toString().replace(/\\/g, '') === '/.s[ca]ss$/',
    ) as any;
    scssRule.use = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];

    // Put assets in predicatable location to make them downloadable
    const svgRule = config.module.rules.find((rule: any) => rule.type === 'asset/resource') as any;
    delete svgRule.generator.filename;
    config.output.assetModuleFilename = (pathData) => {
      const filepath = path.dirname(pathData.filename).match(/(?<=assets\/).*/)[0];
      return `static/${filepath}/[name][ext][query]`;
    };
    return {
      ...config,
      performance: {
        hints: false,
      },
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
  docs: {
    autodocs: false,
  },
};

export default config;
