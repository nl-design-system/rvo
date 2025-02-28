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

const webpackStyleImporter = {
  findFileUrl(url, { _containingUrl }) {
    // Handle ~ imports
    if (url.startsWith('~')) {
      const normalizedUrl = url.slice(1); // Remove the ~ prefix
      try {
        // Extract the base path by removing everything from /src
        const basePath = _containingUrl.pathname.split('/src')[0];
        // Construct the resolved path
        const resolvedPath = path.join(basePath, 'node_modules', normalizedUrl);

        return new URL(`file://${resolvedPath}`);
      } catch (error) {
        console.warn(`Warning: Could not resolve ${url}`);
        return null;
      }
    }
    // Let Sass handle regular imports
    return null;
  },
};

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
    scssRule.use = [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            api: 'modern',
            implementation: 'sass-embedded',
            importers: [webpackStyleImporter],
          },
        },
      },
    ];

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
