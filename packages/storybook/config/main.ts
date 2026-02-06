/* eslint-env node */
import { StorybookConfig } from '@storybook/react-webpack5';
import fs from 'fs';
import path from 'path';
import remarkGfm from 'remark-gfm';

/* set path */
const docsPath = path.resolve(__dirname, '../../../documentation');
const componentsPath = path.resolve(__dirname, '../../../components');
const utilitiesPath = path.resolve(__dirname, '../../../utilities');

function getPackageDir(filepath: string) {
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
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

  stories: [
    `${docsPath}/pages/**/*.docpage.mdx`,
    `${docsPath}/demopages/**/*.stories.@(jsx|tsx)`,
    `${componentsPath}/**!(node_modules)/*.docpage.mdx`,
    `${componentsPath}/**!(node_modules)/*.stories.@(jsx|tsx)`,
    `${utilitiesPath}/**!(node_modules)/*.docpage.mdx`,
    `${utilitiesPath}/**!(node_modules)/*.stories.@(jsx|tsx)`,
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
    'storybook-addon-themes',
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  staticDirs: ['../../../documentation/demopages/common', '../node_modules/@nl-rvo/assets/'],

  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript', // or false
  },

  webpackFinal: async (config) => {
    const rules = config.module?.rules || [];

    const scssRule = rules.find((rule: any) => rule.test.toString().replace(/\\/g, '') === '/.s[ca]ss$/') as any;
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

    const mdxRules = (rules || []).filter((rule: any) => rule.test && String(rule.test).includes('mdx'));

    mdxRules.forEach((rule: any) => {
      (rule.use || []).forEach((u: any) => {
        if (typeof u === 'object' && u.loader?.includes('@storybook/mdx2-csf')) {
          u.options = {
            ...u.options,
            mdxCompileOptions: {
              ...(u.options?.mdxCompileOptions || {}),
              remarkPlugins: [
                ...(u.options?.mdxCompileOptions?.remarkPlugins || []),
                remarkGfm, // enable tables in MDX
              ],
            },
          };
        }
      });
    });

    // Put assets in predictable location to make them downloadable
    const svgRule = rules.find((rule: any) => rule.type === 'asset/resource') as any;
    delete svgRule.generator.filename;
    config.output.assetModuleFilename = (pathData) => {
      const filepath = path.dirname(pathData.filename).match(/(?<=assets\/).*/)[0];
      return `static/${filepath}/[name][ext][query]`;
    };

    // add .md loader
    rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    return {
      ...config,
      performance: {
        hints: false,
      },
      module: {
        ...(config.module || {}),
        rules,
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
    autodocs: true,
    mdxPluginOptions: {
      mdxCompileOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  } as any,
};

export default config;
